import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-white text-gray-900 py-20" id="contact">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wider border-b-2 border-gray-300 inline-block mx-auto pb-2">
          Contact Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className='text-3xl font-normal mb-6 tracking-wide'>
              Get in Touch
            </h3>
            <p className='text-gray-600 mb-8'>
              หากคุณมีข้อสงสัย ข้อเสนอแนะ หรือต้องการพูดคุยเกี่ยวกับโปรเจกต์ สามารถติดต่อผมได้ตามช่องทางด้านล่างนี้
            </p>
            
            <div className='space-y-6'>
              {/* Email */}
              <div className='flex items-start space-x-4'>
                <FaEnvelope className='text-xl text-gray-700 mt-1 flex-shrink-0' />
                <div>
                  <p className='font-semibold text-lg'>Email Address</p>
                  <a href="mailto:sixxxxxx02@gmail.com" className='text-gray-600 hover:text-gray-900 transition duration-200'>
                    sixxphxt02@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className='flex items-start space-x-4'>
                <FaPhone className='text-xl text-gray-700 mt-1 flex-shrink-0' />
                <div>
                  <p className='font-semibold text-lg'>Phone Number</p>
                  <span className='text-gray-600'>092-413-4686</span>
                </div>
              </div>
              
              {/* Location */}
              <div className='flex items-start space-x-4'>
                <FaMapMarkedAlt className='text-xl text-gray-700 mt-1 flex-shrink-0' />
                <div>
                  <p className='font-semibold text-lg'>Location</p>
                  <span className='text-gray-600'>148 ม.7 ต.ซับสมบรูณ์ อ.โคกโพธิ์ไชย จ.ขอนเเก่น</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 transition duration-300 hover:shadow-2xl">
            <h3 className='text-3xl font-normal mb-8 tracking-wide text-center'>
              Send a Message
            </h3>
            <form className='space-y-6'>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-sm text-gray-900 focus:ring-gray-500 focus:border-gray-500 transition duration-200" 
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-sm text-gray-900 focus:ring-gray-500 focus:border-gray-500 transition duration-200" 
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-sm text-gray-900 focus:ring-gray-500 focus:border-gray-500 transition duration-200" 
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gray-900 text-white font-semibold py-3 rounded-sm 
                hover:bg-gray-700 transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact