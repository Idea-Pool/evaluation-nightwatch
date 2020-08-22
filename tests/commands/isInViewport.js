module.exports.command = function (element, callback) {
    const self = this;
    this.execute(function(elem) {
        const bounding = document.querySelector(elem).getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }, [element], function(result) {
        if (typeof callback === "function") {
            callback.call(self, result);
        }
    });
    return this;
    // this.exectue(function(elem){
    //     const bounding = document.querySelector(elem).getBoundingClientRect();
    //     return (
    //         bounding.top >= 0 &&
    //         bounding.left >= 0 &&
    //         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }, [element], function(result){
    //     return result.value;
    // });
};
