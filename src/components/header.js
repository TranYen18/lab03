const Header = {
    render() {
        return /*html*/ `
     <div class="bg-blue-900 py-4">
        <ul class="flex justify-end p-4">
            <li><a href="/signin" class="block py-3 px-4 ml-4 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Sign In</a></li>
            <li><a href="/signup" class="block py-3 px-4 ml-4 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Sign Up</a></li>
        </ul>
          <a href="#">
          <img src="https://picsum.photos/150/40" class="py-4 mx-auto" alt="">
          </a>
        </div>
        <div class="bg-orange-500">
            <ul class="flex">
            <li><a href="/" class="block py-3 px-4 ml-4 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Trang chủ</a></li>
            <li><a href="/about" class="block py-3 px-4 ml-4 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Tin tức</a></li>
            <li><a href="/product" class="block py-3 px-4 ml-4 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Tuyển sinh</a></li>
            <li><a href="/admin/dashboard" class="block py-3 px-4 ml-4 text-sm text-white font-bold hover:bg-orange-600 hover:text-black hover:underline transition duration-300 ease-in hover:ease-out">Dashboard</a></li>
            </ul>
        </div>
        `;
    },
};
export default Header;