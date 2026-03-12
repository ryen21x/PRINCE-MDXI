const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID 'PRINCE-MDX!H4sIAAAAAAAAA5VUy5KiSBT9l9xqtIjyMqIiBigEtLRAfKATs0ghwVQeaWaCYket5xdm16v5iPmr/oQJrKruXsz01LBKbt6499xzzs3PoCgxQ1PUgNFnQCiuIUftkTcEgREwqiRBFHRBDDkEI1C6ktBhTWOLvl6UorEOe+XaDzrPYh72THc6cxa7cHVytD57AC9dQKp9hqOfFEyWbnOoyNAMmCzYweDWz5167/RnRUe7JGEtakRm/s6na/cBvLQVIaa4SC1yQDmiMJuixoOYfgx+PuXOVlfxdVdA6flZxsJ5elwbuB5oUmccOMqlc2Pk6EtZ+TH4j9RslkYY3pq9RPR5NU0mXiLMnEVTbiYrz0hXwyM/zdFlYb3CZzgtUOzGqOCYNx/m/TybzrRddMwbQfJ7/OSYjD5K/ULk+rTaq75k7PFibcGTOPsY8N54k938eCINd3rmBU612E+rYOc1wZNrzffacK+cNp6YncbCj8A9+u6V0//hXfDOdT2341ylkX/dsksQ1dfNdLc88TSgBSUIh9gxmij8IHwn1nz5NjPLW3FOjot9sN0MBnBCSRNtdgfEreV+7vLSyn6ED3lFf4ZyvbhOjmG+S6w8WG1C2brOoU2OIfFzK+adQOHrW5mrm+3ggms52N7E8HDwrUNppWFs9qEyVXVxRYTI4r14X5V6c44M/+E+0Qk1bgxG/ZcuoCjFjFPIcVncY6rcBTCuAxRRxO/0glva9LJjEj8NN8EA9vubcx1EmUnsVVzn6iNBQdwby2Gkr1cPoAsILSPEGIodzHhJmxliDKaIgdGvv3VBga78Vbi23UDsggRTxldFRbISxu+qvl/CKCqrggdNEZntAVEwEr6HEee4SFnLY1VAGh1wjcwD5AyMEpgx9G1CRFEMRpxW6NvWmmXcEr/xjKWgSg7ogvwuCI7BCIiSrAwlQR7Ig/6oL//CPl3aspCQTwXioAuye5oqK4KoKUNJlbWB0ia28S4oYFsLWJjAr1/+/Ovrlz9+b4l/g912iRGHOGNgBMznoD7Hqm0931jDBNvWrVQ3Ux18H/PdL696NH002Pn9hY500T+OdbWDjWCiimuimpnmbQ8TvSr8xU68nR7+oQgYATixJC9GrjLPOjUleLYIGZunLLm4+6yzk5TFNDjFCbeIfRhnta1LmfI09A/bhTJXoVFl5sC5TMaF7tXjjrN+6jxK8uPloe0WoxpH6Mdm9s16qiZmvp412z2dGGTXY4UPV+HFWyXzpzHZz7WrM46qZGZkk3M/EQ3nkcJNdN7oZNOkZcyG3rayl7ZnlOLKsw1d09NXJ983KXt7wfDdY62A7W+C0f1BeJPiPwV9Bd76Tnjp/lDj7Yn5lzU1Ih5ycTVf+U46P7lX3/PKdIWTeQYTnSRL0Q38JyJYm5hJ4OXlty4gGeRJSfNWhiKm5d0vtKxaI7tFUv6kmam7ruGn83byDDKuf1+OJc4R4zAnYNRXlMGgryma9prl0ZI4kB1aEuyhnlet0xudkIBD/r5rQG8/I5TBy98yEVCWhwcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
