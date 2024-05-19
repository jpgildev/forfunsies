export default function About() {
    return (
        <section className="w-screen mt-12 p-10">
            <div className="flex flex-1 justify-start items-center flex-col gap-6">
                <h5 className="font-bold text-4xl">Activities</h5>
                <p className="text text-2xl uppercase font-light">
                    EduHub Institue of Tech
                </p>
                <p className="w-3/5 text-center text-2xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae commodi esse officia impedit possimus culpa pariatur maiores, perspiciatis mollitia ea, laborum voluptas non facilis consequuntur odio accusantium, nemo doloremque dignissimos.
                </p>
                <div className="flex justify-center items-center gap-6">
                    <img className="w-1/4 shaddow-lg hover:shadow-2xl"  
                        src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg" 
                        alt="Img1"
                    />
                    <img className="w-1/4 shaddow-lg hover:shadow-2xl" 
                        src="https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171_1280.jpg" 
                        alt="Img2 "
                    />
                    <img className="w-1/4 shaddow-lg hover:shadow-2xl" 
                        src="https://cdn.pixabay.com/photo/2016/05/18/11/25/library-1400313_1280.jpg" 
                        alt="Img3"
                    />
                </div>
                <button className="border-red-500 border-2 rounded-md p-2 ">View More</button>
            </div>
        </section>
    );
}