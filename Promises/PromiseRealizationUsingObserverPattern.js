const states = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}

class MyPromise{
    constructor(callback){
        this.state = states.PENDING;
        this.value = undefined;
        this.handlers = [];

        try{
            callback(this._resolve, this._reject);
        } catch(error){
            this._reject(error);
        }
    }

    _resolve = (value) => {
        this._handleUpdate(states.FULFILLED, value);
    }

    _reject = (value) => {
        this.handleUpdate(states.REJECTED, value);
    }

    _handleUpdate = (state, value) => {
        if (state === states.PENDING){
            return;
        }

        setTimeout(() => {
            if (value instanceof MyPromise){
                value.then(this._resolve, this._reject);
            }

            this.state = state;
            this.value = value;

            this._executeHandlers();
        }, 0);
    }

    _executeHandlers = () => {
        if (this.state===states.PENDING){
            return;
        }

        this.handlers.forEach((handler)=>{
            if (this.state===states.FULFILLED){
                return handler.onSuccess(this.value);
            }

            return handler.onFailure(this.value);
        })

        this.handlers = [];
    }

    _addHandler = (handler) => {
        this.handlers.push(handler);
        this._executeHandlers();
    }

    then = (onSuccess, onFailure) => {
        return new MyPromise((resolve, reject) => {
            this._addHandler({
                onSuccess: (value) => {
                    if (!onSuccess){
                        return resolve(value);
                    }

                    try{
                        return resolve(onSuccess(value));
                    } catch(error){
                        reject(error);
                    }
                },
                onFailure: (value) => {
                    if (!onFailure){
                        return reject(value);
                    }

                    try{
                        return reject(onFailure(value));
                    } catch(error){
                        return reject(error);
                    }
                }
            })
        })
    }

    catch = (onFailure) => {
        return this.then(null, onFailure);
    }

    finally = (callback) => {
        return new MyPromise((resolve, reject)=>{
            let wasResolved;
            let value;

            this.then((val)=>{
                value = val;
                wasResolved = true;
                return callback();
            }).catch((err)=>{
                value = err;
                wasResolved = false;
                return callback();
            })

            if (wasResolved){
                resolve(value);
            } else{
                reject(value);
            }
        })
    }
}

// Input
const promise = new MyPromise((resolve, reject) => {
    setTimeout(()=>{
        resolve('hello');
    }, 1000);
})

promise.then((value)=>{
    console.log(value);
})