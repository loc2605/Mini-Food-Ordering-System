import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Header from '../components/layout/Header';

const HomePage = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-surface-container-low font-body-md text-on-surface">
      <Header currentPage="home" />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className="relative rounded-2xl overflow-hidden mb-12 h-64 flex items-center bg-gradient-to-r from-orange-600 to-orange-500">
          <img alt="Hero background" className="absolute inset-0 w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJrmt2-D9_imkDgfewriE5u6j73rKwUsDbdVgZQKcvk2TCOYgPInlkYSflM7hj-KJ1xm57qbN0aJ8HpvmaVWW4xRHu3A2HntktdOkranI_3_16eszpZIF0jOWS09C8jtpdEuEaCrPEQmHIUnIEftdyZGWGia-6L5Cskgzm7Vq0JEHztg7eysQBiAyjUFK70TzUv1i-glmRkcnePssO4VEevWWuSGLXZl8LbpPV9KFLW8BMbqzNaDCb48uK5HkqPz8XGjqo5belB5DZ" />
          <div className="relative z-10 px-6 sm:px-12 max-w-2xl">
            <h1 className="font-h1 text-white mb-2 text-4xl sm:text-5xl">Hôm nay bạn muốn ăn gì?</h1>
            <p className="font-body-lg text-orange-100 mb-6">Khám phá món ngon, thêm vào giỏ và đặt hàng thật nhanh.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-button hover:bg-gray-100 transition-all">Khám Phá Ngay</button>
              <button className="bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-3 rounded-xl font-button hover:bg-white/30 transition-all">Ưu Đãi Đặc Biệt</button>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="hidden lg:flex flex-col w-64 sticky top-24 p-4 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 rounded-2xl shadow-md h-fit">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Bộ lọc</h2>
              <p className="text-xs text-gray-500">Tìm kiếm theo tiêu chí</p>
            </div>
            <nav className="flex flex-col gap-2 mb-8 text-sm font-medium">
              <div className="bg-orange-50 text-orange-600 rounded-md px-3 py-2 flex items-center gap-3 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">payments</span>
                <span>Lọc theo giá</span>
              </div>
              <div className="text-gray-500 hover:bg-gray-100 px-3 py-2 flex items-center gap-3 rounded-md cursor-pointer transition-all">
                <span className="material-symbols-outlined text-[20px]">sort</span>
                <span>Sắp xếp</span>
              </div>
              <div className="text-gray-500 hover:bg-gray-100 px-3 py-2 flex items-center gap-3 rounded-md cursor-pointer transition-all">
                <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                <span>Bán chạy nhất</span>
              </div>
              <div className="text-gray-500 hover:bg-gray-100 px-3 py-2 flex items-center gap-3 rounded-md cursor-pointer transition-all">
                <span className="material-symbols-outlined text-[20px]">new_releases</span>
                <span>Mới nhất</span>
              </div>
              <div className="text-gray-500 hover:bg-gray-100 px-3 py-2 flex items-center gap-3 rounded-md cursor-pointer transition-all">
                <span className="material-symbols-outlined text-[20px]">sell</span>
                <span>Giảm giá</span>
              </div>
            </nav>
            <div className="space-y-4">
              <div className="text-xs text-gray-700 uppercase font-bold">Trạng thái cửa hàng</div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input defaultChecked className="rounded border-gray-300 text-orange-600 focus:ring-orange-600" type="checkbox" />
                  <span className="text-sm">Đang mở cửa</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="rounded border-gray-300 text-orange-600 focus:ring-orange-600" type="checkbox" />
                  <span className="text-sm">Giao nhanh 15 phút</span>
                </label>
              </div>
            </div>
            <button className="mt-8 bg-orange-600 text-white py-3 rounded-xl font-button hover:bg-orange-700 active:scale-95 transition-all">Áp dụng lọc</button>
          </aside>

          <div className="flex-1">
            <div className="flex items-center gap-3 overflow-x-auto pb-6">
              <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-label-md whitespace-nowrap hover:bg-orange-700 transition-all">Tất cả</button>
              <button className="bg-white border border-gray-200 px-6 py-2 rounded-full font-label-md whitespace-nowrap hover:bg-orange-50 hover:border-orange-600 transition-colors">Cơm</button>
              <button className="bg-white border border-gray-200 px-6 py-2 rounded-full font-label-md whitespace-nowrap hover:bg-orange-50 hover:border-orange-600 transition-colors">Bún/Phở</button>
              <button className="bg-white border border-gray-200 px-6 py-2 rounded-full font-label-md whitespace-nowrap hover:bg-orange-50 hover:border-orange-600 transition-colors">Món nước</button>
              <button className="bg-white border border-gray-200 px-6 py-2 rounded-full font-label-md whitespace-nowrap hover:bg-orange-50 hover:border-orange-600 transition-colors">Đồ uống</button>
              <button className="bg-white border border-gray-200 px-6 py-2 rounded-full font-label-md whitespace-nowrap hover:bg-orange-50 hover:border-orange-600 transition-colors">Ăn vặt</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                {
                  title: 'Cơm Gà Hội An Đậm Vị',
                  description: 'Gà ta thả vườn, cơm dẻo thơm nồng',
                  price: '55.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3cU0Pb7SNIzzu19Qp0wXgI-rrNzeaFA5pFeMnGWTKGZy7TxJdMT-Vpn8AymyyUkUMxnqXCXDh8gccZGnYVXsAMmTxFVkOMEGRxTcO9CjIGhKKvi-PICFKcn1yZKxd0nqGRk0Hu3elP6kmq_1hwZy-frZ8vohrlAHrQ2-wG7zGO9XdV6Iot0zVbOiyX9Li8FjQwYKxsSXBKDxYdwxEMFwKEQuMDS0zqbYDj6G45T7DKrGYUrNoxE6YcqZDbpi80u6XHNhQV1T6eZ4E',
                  badge: 'Bán chạy',
                  rating: '4.8'
                },
                {
                  title: 'Phở Bò Tái Lăn Hà Nội',
                  description: 'Nước dùng truyền thống hầm 12h',
                  price: '45.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUbZbMy6ZwP6iN0IRTr7nZsOD_QNpoWe-j96O3dLTnyUjgBg6CQlrbjoNr8xDr3tJ4NyHHsuGk__Rba5wuQpEjzHKgHKYKETpglFDujc_hkQ1ED9lXcUxW-eUTMjidbV4UNHgakDUs1uYt92MZ-fXe1u0r7YBv1J3VnyTwk11lECbNe5JGNRrr-9uETSDlScjYPjrXezeLpjiRe6BzGIeT77yJ-0hglI_0hYbhTDDOJA4svw9or8irFM_jlUhVWB8Rgeffl9EwRj1D',
                  badge: 'Ưu đãi',
                  rating: '4.9'
                },
                {
                  title: 'Trà Sữa Trân Châu Ô Long',
                  description: 'Trà thượng hạng, trân châu dai giòn',
                  price: '35.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOgp6rSCMpIgQ9AL4zx6hAqFMtvUFybrAKifDW35xN_gJ0852sl1sIGawlry_4NvBpUgNDZAObE62Vy4TuCX0_sWGLXKdL-gDh60B8m3GtKq8-c4x75yTr_lVirGuY59ZgUak2vJgzgz9F0sjWNMAV0yifOeyCr0y6VMb4j9VtgGRYTzKt5bKmw6meg9I2E5kAPvuhbkITA91TL4q211SMcMJtbkN7_jF-ghzA_5dddGUDN19Pqtzbg3b1jJE6X70z9MpG4hCnwIEa',
                  rating: '4.7'
                },
                {
                  title: 'Bún Chả Hà Nội Phố',
                  description: 'Thịt nướng than hoa thơm lừng',
                  price: '40.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDYiSVLJ2SNsLNleqRoiVk0poc3JrC_a10n38vKP7l2r-ppsE3xdOZdvJJgPpUDSKM7Z7c9JVGy4sww9dDKXlQQn_rO6NwVmcIz_RB8MD5uZIEkaKUoVto3s4Cq9W7HoHBpzBnfOJ-hNr7vdAtm2sPl7hOssuVeqd3TX8UzHyocZxfuyLqCXHMYXDqqqfKDHUEsygBsZX03MAFFsuNoN2FjG9qOiAkbMzD79tiEsUhLVoCwTIQwolbfst3TEh71C0tWRWmUEYax5H5',
                  rating: '4.6'
                },
                {
                  title: 'Salad Ức Gà Áp Chảo',
                  description: 'Lựa chọn hàng đầu cho sức khỏe',
                  price: '59.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD979uJ-Z3mn79bBIeuV4qol2OU4phuoJV0K-rc56XSLA7z49Gzy-4ANTysicFcYt0RMIdfAq9AHOb8DAHJiF9Y5KaZ_lnfVSqmxV2CAb-0LSZfA8rD0A02ySrLAPDLnmFWqtq6qU_RCFdgpu1s-fL3Ewd7y-6vJZfxO5Hk5S3SGgzGgMFffPfNlZza3rCB8qfCLIDB90spjauVdBkhgesi-Wx1qg_Isur3dopiXGIOHBYIJWsE8lqcp-PS6SjtLtyj8MYTcaNd5n4u',
                  badge: 'Healthy',
                  rating: '4.5'
                },
                {
                  title: 'Double Cheese Burger',
                  description: 'Thịt bò nhập khẩu, phô mai tan chảy',
                  price: '68.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHJ2ntts_Vsg03o48CLASM-el_OEVL7I_-pJHUGB8we_b2CEKKqhMdsdQC28xlUBmCJtchNydh6fTrlsCCmFHkptxPbz3koklYjZYcTtmI-JJje20L8VGjAy7INxT0Q1qoyU-NnqFSCM_KAvYLv479mP3Ga_nlnpREyQ_hAe1GtmxCZQuJR_IyNN_3qAHhvSzwsH-wNfwqW8Bk5AgWpDxdFxy1yExyth1txKhDhFIvkqK5cYLqNFOa9gU9LxAB8KyPEPukcR7Fel2n',
                  badge: '-20%',
                  rating: '4.8'
                },
                {
                  title: 'Mì Xào Hải Sản Singapore',
                  description: 'Tôm, mực tươi sống với rau xanh',
                  price: '75.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0_ovX4J60XehdvOdqGrJN2OnV4ClgV042xFl060enRKxWUOwiPiKaOCusdYLUXmL9-Ih5mYPLK35CaysTMHf9uG2UgndWcnrGbZANgSDrcPNutiYMLiy9zThaEWWa1yO3EZeA9dSeZ5zvtdXflzF-GVt-HRwBVKTUhs6iFfE2kSGgU9ajUUTFJ_oeDbe6pFkVNqq7WK31FwECRO2Dzs3oNj5HBtiRWeNI0_-0RfFFF4kxGbP6H7OkRWadbOEkWfC4jTfXNhD7TBCk',
                  rating: '4.7'
                },
                {
                  title: 'Kem Bơ Sáp Đà Lạt',
                  description: 'Bơ tươi ngon, mềm mại như mây',
                  price: '25.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGbHZ6fvk83LDL_yMEGyT08CfXxlWSIifZsmyeH1BVixfMv_RwUlQHCsFUY4u_36rpW0QZSf0i5rxq8QVUf2DunfInwPc9Nlgw0ZUOCZYCJlWMNJS6tsME_Ux-twX606ONH92rtq5FdSEF0_pmcUV0z8k2raNkR8QyE5BnygClRwq7lVq8Up6q9uswmcf9kZuvbB4OAI1iq2-qEd5t6wguKKk8LcfOVH5jVsxHtFWLLl_TmbVVDs-HUVr-fs1AJYrykfgpLUxrIWzM',
                  rating: '4.8'
                },
                {
                  title: 'Bánh Cuốn Tây Hồ',
                  description: 'Bánh cuốn nóng, nhân nấm & thịt',
                  price: '35.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3jwEbsqBYNWCFbW4Vf2btQhajFa0AgIkROXgNpNadnXn0YnpoyKEpmVW--z-h5Rjx2kLcWiQUQiHr7MI2gX2tajup5Z92Rc-G11wjH-2HP_nZFBeyjPi4i5CUVrqTGrJsBCdFaQJZtS9fvxj1HG7l8h8arw4XPEYR2ODq2pjcKgK8jB9GJOrnLwMY7LrZbnVgkJFn63wIho-IJrG8v4xQtlMrSaEJQ0T6a9XDGxvD0f19TGkCMk7sXMT3CaBzyHnnyHVy8tpGgYNu',
                  rating: '4.6'
                },
                {
                  title: 'Bánh Mì Pate Đặc Biệt',
                  description: 'Bánh mì giòn, pate ngon lạ kỳ',
                  price: '20.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtRTzgV8HId5X0SwudUfAYuWz1gSYO36NVSru3DA_j1vYueIvs_PsgMXV1G5KrFe54A7PhexUjsJLDSd_SyErQWUOdZwOYccj290XMcRNVEYTJXlzb5RociqJueJ7E2KfqbPqW0veJi-WBxLyr3UnJ9EykILwnQS-OfCrK7FsCB2OVRVv8SwIHjE76fX7oHrVrcT15dugts1Qm98hzM9vcMX8plz6NpkjJ2xaQipD-Jdph9U8L-Lb3w9S7fR7tnlelstwoE79w7PCG',
                  rating: '4.5'
                },
                {
                  title: 'Kem Dừa Côn Đảo',
                  description: 'Dừa tươi, kem sánh mịn béo ngậy',
                  price: '45.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ3hCWAUx3Ke_TxxvzNprT2UNDFvB0K8PJYwLkw91X0pXotc06XnsqOAVUh__CqQGkW807Ma2UYE203iotr_Jv7X7-vfSciUja5Oo_BWWN90sw6wlfj8lpfIw7ZxaZ3JhF2OHeQIrOcVOKZlIavTEe7sepMrjMY3ghtqs6rZtmDNffKi2C1ZW30du-xg_tQN_OIZtCpSsET6vSm7AYNnUoir4-zSmAYh_b2jhU7AA2cltglr44TurEBO1ji1ROsIrLuehJg7x2WWBO',
                  rating: '4.9'
                },
                {
                  title: 'Nước Cam Vắt Tươi',
                  description: 'Cam tươi vắt mỗi ngày, lạnh mát',
                  price: '30.000₫',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN0zG5P1EX7GYEGv2xIldreFJtk0H2SL3IwfCt_tde4mC1klvYiL1PnZ0fvUEte37CFnVUkA-OfF9p0OW6gns7JVMBObtlk7N6cnk9q1FFV7-HDjj81nXB1Pq6-HqzRTkK-Qsdqo-pf7VIT-cfocRIHEquE0zHY_R9_o4ZNCHtgaaMGtG8SVncddWWTnVdayq-aPaHHimSEMAH3yJcYj38PPubuIqMaGKvARUUXa0FxAgwWgifAv9Uu2D8JivsiSdG14yNzA0kNjaY',
                  rating: '4.7'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden food-card-shadow food-card-hover transition-all duration-300 group">
                  <div className="relative h-48">
                    <img alt={item.title} className="w-full h-full object-cover" src={item.image} />
                    {item.badge && (
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">{item.badge}</div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                      <span className="text-xs font-bold">{item.rating}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-h3 text-lg mb-1 line-clamp-1">{item.title}</h3>
                    <p className="text-secondary text-sm mb-4 line-clamp-1">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-600 font-bold text-lg">{item.price}</span>
                      <button 
                        onClick={() => addToCart({
                          id: index,
                          title: item.title,
                          price: parseInt(item.price.replace(/[₫.]/g, '')),
                          image: item.image,
                          quantity: 1
                        })}
                        className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 active:scale-95 transition-all flex items-center gap-2 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-base">add</span>
                        <span className="text-sm font-semibold">Thêm</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button className="border-2 border-orange-600 text-orange-600 px-12 py-3 rounded-2xl font-button hover:bg-orange-50 transition-all">Xem thêm món khác</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-gray-700 dark:text-gray-300 text-xl">MiniFood</span>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">© 2026 MiniFood. Tất cả quyền được bảo lưu.</p>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <a className="text-xs text-gray-500 hover:text-gray-900 transition-opacity duration-200 py-1" href="#">Hỗ trợ</a>
            <a className="text-xs text-gray-500 hover:text-gray-900 transition-opacity duration-200 py-1" href="#">Chính sách bảo mật</a>
            <a className="text-xs text-gray-500 hover:text-gray-900 transition-opacity duration-200 py-1" href="#">Điều khoản dịch vụ</a>
            <a className="text-xs text-gray-500 hover:text-gray-900 transition-opacity duration-200 py-1" href="#">Liên hệ</a>
          </div>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] px-6 py-3 flex justify-between items-center z-50">
        <div className="flex flex-col items-center gap-1 text-orange-600">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Trang chủ</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px]">Khám phá</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="text-[10px]">Đơn hàng</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px]">Tôi</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

