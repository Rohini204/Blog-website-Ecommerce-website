import './pro.css';
const Pro = () => {
  const handleSubmit=()=>{
    var options={
      key: "rzp_test_X2q3HPba8LM3C4",
      key_secret: "J0qCbJBNwVFqOluSPld7coEJ",
      amount: 199 * 100,
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
    <div className='clpost2'>
      <center>        <img src="https://i.pinimg.com/564x/52/ea/1f/52ea1f4b303aa10ac0fd4e58a13162a7.jpg" width="300px" height="300px"/></center>
        <div className="clheading"> PRO</div>
        <div className="clpar">Unlock exclusive content, personalized meal plans, and expert consultations for a comprehensive approach to health and fitness.</div>
        <div className="clbut" onClick={handleSubmit}>₹199</div>
    </div>
  )
}

export default Pro