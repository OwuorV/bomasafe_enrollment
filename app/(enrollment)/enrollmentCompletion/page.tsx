export default function Completion() {
  return (
    <main className="w-full h-full flex flex-col items-center py-[20px]">
      <div className="px-[20px] completion md:max-w-[75%] md:w-[960px] w-full">
        <div className="header text-[#088738] font-[700] text-[28px] leading-[35px] text-center px-[16px] pt-[20px] pb-[12px]">
          Complete Your Enrollment
        </div>
        <div className="introduction pt-[4px] pb-[12px] px-[16px]">
          <p className="text-[#0D141C] h-full text-[16px] text-left  md:text-center font-[400] w-[97%] md:w-[928px] md:h-[48px] tracking-[0.5px] leading-[24px]">
            To finalize your enrollment in the 'Sustainable Farming Techniques'
            course, please complete the payment of KES 5,000 via M-Pesa.
          </p>
        </div>
        <div className="paymentinstructions pt-[16px] pb-[8px] px-[16px]">
          <div className="payementheader  pt-[16px] pb-[8px] text-[#07743D] text-[18px] font-[600] leading-[23px] ">
            Payment Instructions
          </div>
          <div className="paymentprocedur pt-[4px] pb-[16px] px-[16px] text-[16px] font-[400] leading-[24px] tracking-medium text-[#0D141C]">
            <p>1. Open your M-Pesa menu on your phone.</p>
            <p> 2. Select 'Lipa na M-Pesa'.</p>
            <p> 3. Choose 'Pay Bill'.</p>
            <p> 4. Enter the Business Number: 123456.</p>
            <p>
              5. Enter the Account Number: Your Enrollment ID (provided below).
            </p>
            <p>6. Enter the Amount: KES 5,000.</p>
            <p> 7. Enter your M-Pesa PIN and send.</p>
          </div>
        </div>
        <div className="enrollmentId">
          <div className="topper px-[16px] pt-[16px] pb-[8px]">
            <div className="enterphonetopper  text-[#0D141C] leading-[23px]  text-[18px] font-[600] ">
              Your Enrolment ID
            </div>
          </div>
          <div className="submitPayment flex items-center justify-center px-[16px] py-[12px]">
            <div className="button">
              <div className="px-[16px] flex items-center justify-center font-[700] text-[14px] leading-[21px] rounded-[20px] w-max h-[40px] min-w-[84px] max-w-[480px]">
                Enrollment ID: <span className="text-[#07743D]">789012</span>
              </div>
            </div>
          </div>
        </div>
        <div className="enterphoneField">
          <div className="enterphonetopper px-[16px] pt-[16px] pb-[8px] text-[#07743D] leading-[23px]  text-[18px] font-[600] ">
            Enter Your Phone Number
          </div>
          <div className="enterPhoneform py-[12px]  px-[16px] ">
            <input
              className=" w-full max-w-[448px] md:w-[448px] h-[56px] min-w-[160px] rounded-[12px] border border-1px border-[#D1DBE8] text-[#4F7396] border-solid  p-[15px]"
              type="tel"
              placeholder="Enter your M-Pesa registered phone number"
            />
          </div>
        </div>

        <div className="submitPayment flex items-center justify-center px-[16px] py-[12px]">
          <div className="button w-full md:w-[148px]">
            <button className="bg-[#07743D] cursor-pointer text-[#F7FAFC] px-[16px] flex items-center justify-center font-[700] text-[14px] leading-[21px] rounded-[20px] w-full md:w-[148px] h-[40px] md:min-w-[84px] md:max-w-[480px]">
              Submit payment
            </button>
          </div>
        </div>
        <div className="bottom">
          <div className="pt-[4px] pb-[12px] px-[12px] text-[#4F7396]">
            <p className="text-center text-[#4F7396] text-[14px] font-[400] leading-[21px] max-w-[928px] h-[21px]">
              By clicking 'Submit Payment', you agree to our Terms of Service
              and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
