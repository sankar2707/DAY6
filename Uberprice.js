class Uber {
    static BaseFare = 500
    static CostPerMile = 200
    static CostPerMinute = 100
    static BookingFee = 66

    constructor(time = 1, mile = 1) {
        this.time = time
        this.mile = mile
    }

    totalPrice(time = this.time, mile = this.mile) {
        console.log(`The total price is $${(Uber.BaseFare) + (Uber.BookingFee) + ((Uber.CostPerMinute) * time) + ((Uber.CostPerMile) * mile)} only`)
    }
}

let car = new Uber()
car.totalPrice(15, 10)
car.totalPrice(10, 10)
