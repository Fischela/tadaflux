const NairaFormat = (price) => {
    return "NGN  ₦" +price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

export default NairaFormat