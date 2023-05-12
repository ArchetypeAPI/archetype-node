import workerpool from 'workerpool';
import isOnline from 'is-online';

interface QueueItem {
  resolve: (value: any) => void;
  reject: (reason: any) => void;
  config: workerpool.WorkerPoolProxyExecArgs;
}

export class RequestQueue {
  private pool: workerpool.WorkerPool;
  private queue: QueueItem[];
  private baseURL: string;

  constructor(baseURL: string, workerScriptPath: string) {
    this.baseURL = baseURL;
    this.pool = workerpool.pool(workerScriptPath);
    this.queue = [];
    this.processQueue();
  }

  private async processQueue(): Promise<void> {
    while (true) {
      if (await isOnline()) {
        while (this.queue.length > 0) {
          const item = this.queue.shift();
          if (item) {
            this.pool.exec.apply(this.pool, item.config)
              .then(item.resolve)
              .catch(item.reject);
          }
        }
      } else {
        // Wait for 5 seconds before checking network connectivity again
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
  }

  public async execute(config: workerpool.WorkerPoolProxyExecArgs): Promise<any> {
    config.functionArgs.unshift(this.baseURL);
    if (await isOnline()) {
      return this.pool.exec.apply(this.pool, config);
    } else {
      return new Promise((resolve, reject) => {
        this.queue.push({ resolve, reject, config });
      });
    }
  }
}
