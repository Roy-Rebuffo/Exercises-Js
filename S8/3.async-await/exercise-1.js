const runTimeOut = async () => {
    await doTimeOut();

    console.log('Time out!');
};

function doTimeOut(){
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    });
    return promise;
}
runTimeOut();