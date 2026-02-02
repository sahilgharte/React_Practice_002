const Contact = () => {
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4'>
            
            {/* Contact Card */}
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
                
                {/* Header */}
                <div className="bg-orange-500 p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
                    <p className="text-orange-100">
                        We'd love to hear from you! Drop us a message.
                    </p>
                </div>

                {/* Form Section */}
                <div className="p-8">
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
                        
                        {/* Name Input */}
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input 
                                type="text" 
                                id="name"
                                placeholder="Enter your name" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                placeholder="Enter your email" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea 
                                id="message"
                                rows="4" 
                                placeholder="Type your message here..." 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button 
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg transform active:scale-95 duration-200"
                        >
                            Send Message 🚀
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;