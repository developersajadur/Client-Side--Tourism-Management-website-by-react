
// import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';


const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
    let timerInterval;
Swal.fire({
  title: "Thanks For Contact Us",
  html: "I will Contact Us in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
  
  }
    return (
        <div className='mt-10 px-1 lg:px-10'>

          {/* <Helmet>
            <title>
              Contact Us With Your Company
            </title>
          </Helmet> */}

<div className="w-full text-center py-5 rounded-xl bg-[#1313130D] mt-10 mb-5">
            <h1 className="text-4xl font-bold">Get In Touch</h1>
        </div>
<div className="flex justify-center mt-10">
    <form onSubmit={handleContact} >
  <div className="flex flex-col justify-center">
    <div className="flex flex-col md:flex-row lg:flex-row gap-10">
      <div className="">
        <h6 className="text-[#131318] text-lg font-bold w-80 mb-2">
          Your Name
        </h6>
        <input
          type="text"
          required
          placeholder="Enter your full name"
          className="input focus:outline-none w-full max-w-xs bg-[#13131808] rounded-lg"/>
      </div>
      <div className="">
        <div className="">
          <h6 className="text-[#131318] text-lg font-bold w-80 mb-2">
            Your Email
          </h6>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="input focus:outline-none w-full max-w-xs bg-[#13131808] rounded-lg"/>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row lg:flex-row gap-10 mt-8">
      <div className="">
        <h6 className="text-[#131318] text-lg font-bold w-80 mb-2">
          Subject
        </h6>
        <input
          type="text"
          required
          placeholder="Enter your subject"
          className="input focus:outline-none w-full max-w-xs bg-[#13131808] rounded-lg"/>
      </div>

      <div className="">
        <div className="">
          <h6 className="text-[#131318] text-lg font-bold w-80 mb-2">
            Phone Number
          </h6>
          <input
            type="number"
            required
            placeholder="Enter your phone number"
            className="input focus:outline-none w-full max-w-xs bg-[#13131808] rounded-lg"/>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <div className="">
        <h6 className="text-[#131318] text-lg font-bold w-80 mb-2">
          Message
        </h6>
        <textarea
          type="text"
          required
          className="input focus:outline-none h-80 w-full bg-[#13131808] rounded-lg pt-4"
          placeholder="Write your message"></textarea>
      </div>
    </div>
    <div
      className="w-fit md:w-full lg:w-full mt-5 lg:mt-8 flex justify-center">
      <button className="btn py-2 lg:py-3 text-black font-semibold bg-[#E7A500] px-24 md:px-72 lg:px-72"
        >Get In Touch</button>
    </div>
  </div>
  </form>
</div>
        </div>
    );
};

export default Contact;