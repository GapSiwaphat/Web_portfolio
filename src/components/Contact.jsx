import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-[rgba(49,46,129,0.9)] backdrop-blur-md  text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Contact</h3>
            <p>ติดต่อได้ที่ :</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    sixxxxxx02@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>092-413-xxxx</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>148 ม.7 ต.ซับสมบรูณ์ อ.โคกโพธิ์ไชย จ.ขอนเเก่น</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact