export default function Footer() {
  return (
    <footer className="text-white bg-black border-white/35 shadow-xl backdrop-blur-xl w-full rounded-xl border py-5 px-10">
      <div className="pink__gradient w-[30%] h-[30%] absolute -z-0 left-[40%]" />

      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col w-1/3">
          <h5 className="text-3xl py-2">About Us</h5>
          <p className="text-xl">
            We are dedicated to revolutionizing kidney tumor detection using MRI
            scans. By taking this sophisticated medical imaging technology to next
            level
          </p>
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <h5 className="py-4 text-2xl">Contact 📞</h5>
          <ul className="flex flex-col gap-4">
            <li>Email : sew.wijesingha75@gmail.com</li>
            <li>Phone: +9470376587</li>
          </ul>
        </div>
        <div className="flex flex-col w-1/3 items-end">
          <h5 className="py-4 text-2xl">Follow Us</h5>
          <div className="social-media">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
