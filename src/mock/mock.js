const mockFetch = (url, options) => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            const income = options.body.income.value;
            const price = options.body.purchasePrice.value;
            const credit = options.body.creditScore.value;
            if (price > 1000000) {
                reject({
                    message: 'Bad Request'
                });
            }
            else if (price / income > .2 || credit < 600) {
                resolve({
                    message: 'You do not meet the requirements to be prequalified for this loan',
                    qualified: false
                })
            } else {
                resolve({
                    message: 'Qualified!',
                    qualified: true
                })
            }
        }, 500)
    });
}

export default mockFetch;
