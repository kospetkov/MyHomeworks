var ATM = {
    is_auth: false,
    current_user:false,
    current_type:false,

    // all cash of ATM
    cash: 2000,
    // all available users
    users: [
        {number: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {number: "0025", pin: "123", debet: 675, type: "user"}
    ],
    // authorization
    auth: function(number, pin) {
        var userslenght = this.users.length;
        for (var i = 0; i < userslenght; i ++) {
            var curUser = this.users[i];
            if ((curUser.number === number) && (curUser.pin === pin)) {
                this.is_auth = true;
        }
        if (this.is_auth) {
            this.current_user = curUser;
            this.current_type = curUser.type;
        }
        if (this.is_auth) {
            console.log('autorized');
        } else {
            console.log('not autorized');
        }
    },
    // check current debet
    check: function() {
        if (this.is_auth) {

        }
    }
    },
    // get cash - available for user only
    getCash: function(amount) {
        if (this.users.type === 'user') {
            this.current_type = true;
        }
        if (this.current_type && amount > this.users.debet) {
            return true;
        }
        else {
            return false;
        }

    },
    // load cash - available for user only
    loadCash: function(amount){

    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function(addition) {

    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function() {

    },
    // log out
    logout: function() {

    }
};