class Car {
    constructor() {
        this._currentSpeed = 0;
        this.speedObervers = [];
    }

    subscribeObserver(observer) {
        if (observer.notify) {
          this.speedObervers.push(observer);
        } else {
          throw new Error('Invalid observer. notify implementation missing'); 
        }
    }

    unsubscribeObserver(observer) {
      let index = this.speedObervers.indexOf(observer);

      if (index > 0) {
        this.speedObervers.splice(index, 0);
      }
    }

    notifySpeedObservers(newVal, oldVal) {
      for (let observer of this.speedObervers) {
        observer.notify(newVal, oldVal);
      }
    }

    get currentSpeed() {
      return this._currentSpeed;
    }

    set currentSpeed (value) {
      let oldValue = this._currentSpeed;
      this._currentSpeed = value;

      if (this._currentSpeed != oldValue) {
        this.notifySpeedObservers(this._currentSpeed, oldValue);
      }
    }
}

class currentSpeedConsoleOberver {
  notify(newVal, oldVal) {
    console.log(`The speed change from ${oldVal} to ${newVal} km/h`);
  }
}

const car = new Car();
const consoleObserver = new currentSpeedConsoleOberver();

car.subscribeObserver(consoleObserver);

let interval = setInterval(() => { 
  car.currentSpeed += 10;
  if (car.currentSpeed == 60) {
    car.unsubscribeObserver(consoleObserver);
  }
}, 1000)

setTimeout(() => {
  clearInterval(interval);
}, 11000);