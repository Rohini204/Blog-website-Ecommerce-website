import './business.css';

const Business = () => {
  const handleSubmit=()=>{
    var options={
      key: "rzp_test_X2q3HPba8LM3C4",
      key_secret: "J0qCbJBNwVFqOluSPld7coEJ",
      amount: 299 * 100,
      currency: "INR",
      name: "Subscribe",
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
    <div className='clpost1'>
      <center><img src="https://i.pinimg.com/564x/3a/69/75/3a6975ebb83e52743f4f08ee0713e17b.jpg" width="300px" height="300px" /></center>
        <div className="clheading"> BUSINESS</div>
        <div className="clpar">Empower your team with corporate wellness programs, on-demand coaching, and analytics for a healthier, more productive workforce.</div>
        <div className="clbut" onClick={handleSubmit}>₹299</div>

    </div>
  )
}

export default Business