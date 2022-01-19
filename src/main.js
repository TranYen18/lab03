import Navigo from "navigo";
import AboutPage from "./pages/about";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/addnews";
import DashboardPage from "./pages/dashboard";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import signin from "./pages/signin";
import signup from "./pages/signup";


const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => print(HomePage.render()),
    "/about": () => print(AboutPage.render()),
    "/product": () => print(ProductPage.render()),
    "/signup": () => print(signup.render()),
    "/signin": () => print(signin.render()),
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
    "/admin/dashboard": () => print(DashboardPage.render()),
    "/admin/products": () => console.log("admin product"),
    "/admin/news": () => print(AdminNews.render()),
    "/admin/news/add": () => print(AdminNewsAdd.render()),
});

router.resolve();

// const data = [
//     { id: 1, name: "A" }, // item
//     { id: 2, name: "B" }, // item
//     { id: 3, name: "C" }, // item
// ];

// const result = data.find((item) => item.id === 3);

// console.log(result);
/**
 * Bước 1: Tìm ra được phần tử trong mảng và hiển thị ra ngoài
 * Bước 2: Lấy Id ở url và cho vào pages news
 */