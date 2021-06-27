import React from "react";

function Faq() {
  return (
    <div>
      <div>
        <section class="text-gray-700">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The commonly asked questions about how we work and what can we
                do for you.
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What is online doctor consultation?
                  </summary>

                  <span>
                    Online doctor consultation or online medical consultation is
                    a method to connect patients and doctors virtually. It is a
                    convenient and easy way to get online doctor advice using
                    doctor apps or telemedicine apps or platforms, and the
                    internet.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    How do I start online consultation with doctors on
                    HospitalName ?{" "}
                  </summary>

                  <span>
                    Starting an online doctor consultation is very simple on
                    HospitalName . Follow these 4 simple steps: • Choose your
                    health concern • Connect with a doctor within 2 minutes •
                    Ask your queries to the doctor via audio or video call • Get
                    a valid online doctor prescription and a 3-day free online
                    doctor consultation
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Are your online doctors qualified?
                  </summary>

                  <span>
                    We follow a strict verification process for every doctor
                    providing online medical services on HospitalName . Our team
                    manually verifies necessary documents, registrations, and
                    certifications for every doctor.
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What happens if I don’t get a response from a doctor?{" "}
                  </summary>

                  <span class="px-4 py-2">
                    In the unlikely event that an online doctor does not
                    respond, you will be entitled to a 100% refund.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Is online doctor consultation safe and secured on
                    HospitalName ?{" "}
                  </summary>

                  <span class="px-4 py-2">
                    The privacy of our patients is critical to us, and thus, we
                    are compliant with industry standards like ISO 27001. Rest
                    assured that your online consultation with a doctor is
                    completely safe and secured with 256-bit encryption.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I do a free online doctor consultation on HospitalName ?{" "}
                  </summary>

                  <span class="px-4 py-2">
                    Avail a free online consultation with top doctors in India
                    during the India Health Hour. Click here for more details.
                    We have the free questions service available on our health
                    app only. Ask a question and get free online medical advice
                    within 24 to 48 hours.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faq;
