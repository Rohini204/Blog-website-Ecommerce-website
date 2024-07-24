import './basic.css';
const Basic = () => {
  const handleSubmit=()=>{
    var options={
      key: "rzp_test_X2q3HPba8LM3C4",
      key_secret: "J0qCbJBNwVFqOluSPld7coEJ",
      amount: 99 * 100,
      currency: "INR",
      name: "Subscription",
      description: " Health Blog",
      handler: function(response){
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Riya",
        email: "itsriyaa05@gmail.com",
        contact: "9566970711"
      },
      notes:{
        address: "Razorpay Corporate office"
      },
      theme:{
        color: "#3399cc"
      }
    };
    var pay=new window.Razorpay(options);
    pay.open();
  }
  return (
    <>
    <div className='clpost'>
        <center><img src="https://i.pinimg.com/564x/d8/ab/80/d8ab806a599f34b91cc08ebaa6b22d78.jpg " width="300px" height="300px" /></center>
        <div className="clheading"> BASIC</div>
        <div className="clpar"> Access essential health tips, articles, news and recipes to kickstart your journey towards better well-being.
.</div>
        <div className="clbut" onClick={handleSubmit}>₹99</div>
    </div>
    </>
  )
}

export default Basic