const STORE_KEY = "limitedCollection.v2";

// Mỗi container = một thiết kế duy nhất, một loại sản phẩm.
// Mỗi sản phẩm được đánh số từ 1 đến capacity (số lượng đúng 1 container).
const COLLECTIONS = [
  {
    id: "dong-ky-01",
    opens: "2026-10-20T20:00:00+07:00",
    img: "images/dong-ky-design.jpg",
    name: "Tủ Đồng Kỵ",
    type: "Tủ đứng 3 cánh",
    village: "Làng chạm gỗ Đồng Kỵ · Bắc Ninh",
    desc: "Đường gờ chạm khắc được tiết chế thành hình khối phẳng, hợp với căn hộ hiện đại.",
    price: 5800,
    dims: "120 × 50 × 180 cm",
    weight: "45 kg",
    capacity: 24,
    color: "#5E6B3E",
    art: "cabinet"
  },
  {
    id: "bat-trang-02",
    opens: "2026-11-02T20:00:00+07:00",
    img: "images/bat-trang-design.jpg",
    name: "Ghế đôn Bát Tràng",
    type: "Ghế đôn men rạn",
    village: "Làng gốm Bát Tràng · Hà Nội",
    desc: "Men rạn và dáng bầu truyền thống, đặt trên khung gỗ sồi tối giản.",
    price: 5200,
    dims: "Ø 35 × 45 cm",
    weight: "6 kg",
    capacity: 18,
    color: "#B5532F",
    art: "stool"
  },
  {
    id: "van-phuc-03",
    opens: "2026-11-16T20:00:00+07:00",
    img: "images/van-phuc.jpg",
    name: "Bình phong Vạn Phúc",
    type: "Bình phong 3 khung lụa",
    village: "Làng lụa Vạn Phúc · Hà Nội",
    desc: "Lụa tơ tằm dệt tay phủ trên khung gỗ, làm mềm không gian và tạo lớp sáng.",
    price: 7400,
    dims: "150 × 3 × 175 cm (3 khung)",
    weight: "14 kg",
    capacity: 30,
    color: "#1F2F4A",
    art: "screen"
  },
  {
    id: "phu-vinh-04",
    opens: "2026-11-30T20:00:00+07:00",
    img: "images/phu-vinh-design.jpg",
    name: "Ghế mây tre Phú Vinh",
    type: "Ghế lounge mây tre",
    village: "Làng mây tre đan Phú Vinh · Hà Nội",
    desc: "Đan mây tre theo lối cổ, khung thép sơn đen để giữ dáng gọn.",
    price: 5600,
    dims: "70 × 75 × 80 cm",
    weight: "8 kg",
    capacity: 20,
    color: "#C9A24B",
    art: "chair"
  }
];

function artSvg(type, color) {
  const ink = "#161311", paper = "#EAE2D3";
  const shapes = {
    cabinet: `<rect x="120" y="70" width="160" height="210" fill="${color}"/><path d="M200 70V280" stroke="${paper}" stroke-width="2"/><circle cx="188" cy="170" r="4" fill="${paper}"/><circle cx="212" cy="170" r="4" fill="${paper}"/><rect x="110" y="280" width="180" height="10" fill="${ink}"/>`,
    stool: `<ellipse cx="200" cy="150" rx="78" ry="26" fill="${color}"/><path d="M122 150 Q130 250 150 280 H250 Q270 250 278 150" fill="${color}" opacity=".9"/><path d="M140 180 Q200 200 260 180" stroke="${paper}" stroke-width="2" fill="none"/><rect x="150" y="280" width="100" height="8" fill="${ink}"/>`,
    screen: `<rect x="100" y="80" width="70" height="200" fill="${color}"/><rect x="165" y="80" width="70" height="200" fill="${paper}" stroke="${color}" stroke-width="3"/><rect x="230" y="80" width="70" height="200" fill="${color}"/><path d="M180 120 L220 240 M200 110 L190 250" stroke="${color}" stroke-width="2"/><rect x="92" y="280" width="222" height="8" fill="${ink}"/>`,
    chair: `<path d="M140 110 Q200 70 260 110 L250 230 H150 Z" fill="${color}" opacity=".85"/><path d="M150 140 H250 M150 165 H250 M150 190 H250 M150 215 H250" stroke="${paper}" stroke-width="2"/><rect x="140" y="230" width="120" height="10" fill="${ink}"/><path d="M150 240 L140 300 M250 240 L260 300" stroke="${ink}" stroke-width="6"/>`
  };
  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><rect width="400" height="300" fill="${paper}"/><circle cx="200" cy="150" r="110" fill="none" stroke="${color}" stroke-width=".8" opacity=".5"/>${shapes[type]}</svg>`;
}


// Hành trình sản xuất của từng thiết kế, hiển thị trên thẻ sản phẩm.
const JOURNEYS = {
  "dong-ky-01": [
    { t: "Phác thảo từ đình chùa", d: "Nhà thiết kế đo và chụp lại các đường gờ trên cửa võng, bức cốn ở đình làng. Mỗi đường cong được vẽ tay trên giấy kỹ thuật, rồi giảm xuống còn ba nhóm khối: phẳng, lõm, nổi.", k: "Giữ lại hoa văn cúc mai, bỏ phần chạm sâu để cánh tủ không bị bụi bám.", h: "3 tuần" },
    { t: "Mẫu gỗ tỷ lệ 1:5", d: "Mẫu được làm bằng gỗ xoan thử. Thợ kiểm tra độ vừa của cánh tủ, khe hở mộng và lực kéo ngăn kéo. Chỉnh đến khi cánh đóng êm mà không cần keo bổ sung.", k: "Đo khe hở đến 0,5 mm, sai số lớn hơn là làm lại mẫu.", h: "2 tuần" },
    { t: "Chọn và sấy gỗ", d: "Gỗ xoan hoặc gỗ hương được chọn từ kho, kiểm tra vân và độ ẩm. Gỗ được sấy tự nhiên nhiều tuần trước khi đưa vào xưởng để tránh cong vênh.", k: "Độ ẩm mục tiêu khoảng 10–12%, đo bằng máy trước khi cắt.", h: "6 tuần chờ gỗ" },
    { t: "Chạm khắc bằng tay", d: "Thợ chạm Đồng Kỵ phác đường gờ bằng bút chì, rồi đục từng nét bằng bộ đục cái, đục bát và dao chạm. Họ đổi lưỡi đục theo độ cong, mỗi cánh tủ tốn khoảng hai ngày làm việc.", k: "Không khuôn máy, không dán giấy mẫu. Hai cánh cùng một tủ hiếm khi giống hệt nhau, và đó là dấu vết của người thợ.", h: "18 giờ mỗi tủ" },
    { t: "Ráp mộng không đinh", d: "Khung và cánh được ráp bằng mộng âm dương, không dùng đinh. Thợ dùng búa gỗ gõ từng mộng vào vị trí, rồi để khô một đêm trong khung ép.", k: "Mộng khít đến mức khi lắp không cần siết ốc.", h: "2 ngày mỗi tủ" },
    { t: "Chà nhám và phủ dầu", d: "Bề mặt được chà ba lượt: thô, vừa, mịn, mỗi lượt theo chiều vân gỗ. Sau đó phủ ba lớp dầu thực vật, mỗi lớp chờ khô hẳn và được lau bằng vải mềm.", k: "Mặt gỗ ấm và có chiều sâu, không bóng gắt như sơn công nghiệp.", h: "4 ngày mỗi tủ" },
    { t: "Kiểm định và đánh số", d: "Từng tủ được kiểm tra độ thẳng, khe hở cánh, độ êm của ray và ngăn kéo. Tủ đạt chuẩn được khắc số 01–24 ở mặt sau và ghi vào sổ thiết kế.", k: "Tủ không đạt bị loại, không bán như hàng lỗi.", h: "1 ngày mỗi tủ" },
    { t: "Đóng gói từng sản phẩm", d: "Mỗi tủ được được đặt vào khung bảo vệ và bọc giấy kraft, bọc giấy kraft và chèn xốp ở các góc, rồi đặt vào thùng có ghi số thứ tự. Khi sản phẩm số 24 được đóng xong, thiết kế được đánh dấu đã đủ số lượng.", k: "Số trên thùng khớp với số trên thẻ sản phẩm, để truy đúng món khi cần.", h: "2 ngày" },
    { t: "Xếp container và niêm phong", d: "24 thùng được xếp chặt trong container, chèn gỗ và đệm chống sốc. Cửa được niêm phong bằng chì số, mã container và số niêm phong được ghi vào hồ sơ. Từ bước này, thiết kế chính thức đóng.", k: "Số niêm phong nằm trong hồ sơ, khách có thể đối chiếu khi nhận hàng.", h: "1 ngày" },
    { t: "Lập hồ sơ xuất khẩu", d: "Hóa đơn, phiếu đóng gói, chứng nhận xuất xứ và tờ khai hải quan được lập. Đơn vị vận tải đối chiếu danh mục hàng với số lượng đã bán để đảm bảo khớp.", k: "Chứng nhận xuất xứ ghi rõ làng nghề, để lô hàng mang đúng câu chuyện của nó.", h: "5–7 ngày" },
    { t: "Vận chuyển về cảng", d: "Container được xe đầu kéo đưa từ xưởng ra cảng Hải Phòng. Đoàn xe đi theo lịch đã định, và niêm phong được kiểm tra lại tại cổng cảng.", k: "Niêm phong được kiểm tra hai lần, trước khi rời xưởng và khi vào cảng.", h: "1 ngày" },
    { t: "Lên tàu biển", d: "Container được xếp lên tàu theo lịch, đặt ở vị trí ổn định trên boong. Hành trình trên biển thường kéo dài ba đến bốn tuần, tùy tuyến và cảng trung chuyển.", k: "Vị trí container được theo dõi qua mã vận đơn suốt chặng đường.", h: "3–4 tuần trên biển" },
    { t: "Nhập cảnh và kiểm đếm", d: "Tại cảng đến, hải quan nước nhập khẩu kiểm tra hồ sơ và niêm phong. Container được đưa về kho đối tác, tại đó từng thùng được kiểm đếm lại theo số thứ tự 01 đến 24.", k: "Mỗi thùng được đối chiếu với hồ sơ trước khi xuất kho.", h: "1–2 tuần" },
    { t: "Giao đến khách hàng", d: "Sản phẩm được giao tới khách qua đơn vị giao hàng nội địa tại nước nhận. Khách kiểm tra, xác nhận nhận hàng trên sàn thương mại điện tử, và thiết kế được lưu lại trong bộ sưu tập đã đóng.", k: "Sản phẩm cuối cùng của container được giao kèm thẻ số và giấy chứng nhận.", h: "1–2 tuần" }
  ],
  "bat-trang-02": [
    { t: "Vẽ lại dáng bầu", d: "Dáng bầu của gốm Bát Tràng được đo theo tỷ lệ vàng: chiều cao, đường thắt eo và đáy. Nhà thiết kế bỏ hoa văn thừa, chỉ giữ một đường cong duy nhất để ghế đôn đứng vững trong không gian hiện đại.", k: "Bản vẽ có ba phương án, và chỉ một phương án được nung thử.", h: "2 tuần" },
    { t: "Thử đất và men", d: "Đất sét được trộn theo công thức từ mỏ quen thuộc, nặn mẫu nhỏ rồi nung thử để chọn men. Men rạn được thử ở bốn nhiệt độ khác nhau để tìm vết rạn đẹp mà không làm yếu thân gốm.", k: "Mỗi mẻ thử là một ghi chép: đất, men, nhiệt độ, kết quả.", h: "4 tuần" },
    { t: "Nặn trên bàn xoay", d: "Thợ Bát Tràng đưa đất lên bàn xoay, dùng tay ướt kéo thành thân, rồi nắn đường thắt eo bằng hai ngón tay. Thân được để se đến khi đủ cứng để gọt chân đế.", k: "Mỗi chiếc đều có dấu tay nhẹ bên trong thân, không xóa.", h: "2 ngày mỗi chiếc" },
    { t: "Tráng men tay", d: "Men được nhúng hoặc tưới tay theo lớp mỏng dần từ đáy lên, để lại đường chảy tự nhiên. Chỗ nào cần men dày hơn, thợ quét thêm bằng cọ.", k: "Không có hai chiếc men giống nhau, vì vậy mỗi số 01–18 có một vết rạn riêng.", h: "1 ngày mỗi chiếc" },
    { t: "Nung hai lần", d: "Lần một nung ở nhiệt độ thấp để gốm cứng. Lần hai nung ở nhiệt độ cao để men chảy và rạn. Lò được theo dõi qua ống đo nhiệt và mở ra khi nguội từ từ.", k: "Khoảng 10% mẻ nung bị loại vì cong hoặc nứt, và được đập bỏ ngay.", h: "5 ngày mỗi mẻ" },
    { t: "Khung gỗ sồi mộng tay", d: "Chân và khung gỗ sồi được đục mộng, ráp và chà nhám bằng tay. Đế gốm được gắn vào khung bằng vòng đệm gỗ, không dùng keo kim loại để giữ tính thủ công.", k: "Khung và gốm được lắp thử trước khi đóng gói để đảm bảo đứng vững.", h: "3 ngày mỗi ghế" },
    { t: "Kiểm tra từng chiếc", d: "Mỗi ghế đôn được gõ thử để nghe tiếng gốm trong, kiểm tra vết nứt tóc và độ ổn định trên mặt phẳng. Chiếc đạt được khắc số 01–18 dưới đáy.", k: "Có chứng nhận chữ ký thợ làm, ghi tên làng và ngày nung.", h: "1 giờ mỗi chiếc" },
    { t: "Đóng gói từng sản phẩm", d: "Mỗi ghế đôn được được bọc giấy và chèn bông, rồi đặt vào hộp gỗ, bọc giấy kraft và chèn xốp ở các góc, rồi đặt vào thùng có ghi số thứ tự. Khi sản phẩm số 18 được đóng xong, thiết kế được đánh dấu đã đủ số lượng.", k: "Số trên thùng khớp với số trên thẻ sản phẩm, để truy đúng món khi cần.", h: "2 ngày" },
    { t: "Xếp container và niêm phong", d: "18 thùng được xếp chặt trong container, chèn gỗ và đệm chống sốc. Cửa được niêm phong bằng chì số, mã container và số niêm phong được ghi vào hồ sơ. Từ bước này, thiết kế chính thức đóng.", k: "Số niêm phong nằm trong hồ sơ, khách có thể đối chiếu khi nhận hàng.", h: "1 ngày" },
    { t: "Lập hồ sơ xuất khẩu", d: "Hóa đơn, phiếu đóng gói, chứng nhận xuất xứ và tờ khai hải quan được lập. Đơn vị vận tải đối chiếu danh mục hàng với số lượng đã bán để đảm bảo khớp.", k: "Chứng nhận xuất xứ ghi rõ làng nghề, để lô hàng mang đúng câu chuyện của nó.", h: "5–7 ngày" },
    { t: "Vận chuyển về cảng", d: "Container được xe đầu kéo đưa từ xưởng ra cảng xuất khẩu gần nhất. Đoàn xe đi theo lịch đã định, và niêm phong được kiểm tra lại tại cổng cảng.", k: "Niêm phong được kiểm tra hai lần, trước khi rời xưởng và khi vào cảng.", h: "1 ngày" },
    { t: "Lên tàu biển", d: "Container được xếp lên tàu theo lịch, đặt ở vị trí ổn định trên boong. Hành trình trên biển thường kéo dài ba đến bốn tuần, tùy tuyến và cảng trung chuyển.", k: "Vị trí container được theo dõi qua mã vận đơn suốt chặng đường.", h: "3–4 tuần trên biển" },
    { t: "Nhập cảnh và kiểm đếm", d: "Tại cảng đến, hải quan nước nhập khẩu kiểm tra hồ sơ và niêm phong. Container được đưa về kho đối tác, tại đó từng thùng được kiểm đếm lại theo số thứ tự 01 đến 18.", k: "Mỗi thùng được đối chiếu với hồ sơ trước khi xuất kho.", h: "1–2 tuần" },
    { t: "Giao đến khách hàng", d: "Sản phẩm được giao tới khách qua đơn vị giao hàng nội địa tại nước nhận. Khách kiểm tra, xác nhận nhận hàng trên sàn thương mại điện tử, và thiết kế được lưu lại trong bộ sưu tập đã đóng.", k: "Sản phẩm cuối cùng của container được giao kèm thẻ số và giấy chứng nhận.", h: "1–2 tuần" }
  ],
  "van-phuc-03": [
    { t: "Nghiên cứu hoa văn lụa", d: "Nhà thiết kế nghiên cứu các họa tiết cổ trên lụa Vạn Phúc, gồm hoa sen, cành mai và đường sóng nước. Các họa tiết được vẽ lại thành ba mảng lớn, để khi căng lên khung vẫn giữ được nhịp điệu.", k: "Bản vẽ được chuyển sang tỷ lệ 1:1 bằng giấy than, đánh dấu từng sợi dọc.", h: "3 tuần" },
    { t: "Thử màu và sợi", d: "Tơ tằm được nhuộm theo bảng màu thử, rồi dệt thử một khổ nhỏ để xem màu dưới ánh sáng tự nhiên và ánh đèn vàng. Lụa được chọn độ bóng vừa phải, không lóa.", k: "Mẫu thử được ghi kèm mã màu và loại ánh sáng.", h: "2 tuần" },
    { t: "Ươm tơ và nhuộm", d: "Kén tằm được luộc để lấy sợi, sau đó tơ được nhuộm bằng nguyên liệu tự nhiên. Tơ phơi trong bóng râm để màu không cháy, mỗi mẻ mất vài ngày.", k: "Màu có thể lệch nhẹ giữa các mẻ, và đó là đặc tính của nhuộm thủ công.", h: "5 ngày mỗi mẻ" },
    { t: "Dệt trên khung cửi", d: "Thợ Vạn Phúc căng sợi dọc trên khung cửi, luồn sợi ngang bằng thoi. Họ dệt từng mét, đổi màu theo bản vẽ bằng tay, không có máy đổi màu tự động.", k: "Một tấm lụa mất khoảng sáu ngày, một lỗi nhỏ cũng phải tháo và dệt lại đoạn đó.", h: "6 ngày mỗi tấm" },
    { t: "Xử lý và giặt lụa", d: "Tấm lụa được giặt nhẹ, tẩy keo tự nhiên và phơi khô dưới bóng râm. Sau bước này, lụa mềm và rủ đúng cách.", k: "Lụa được kiểm tra trọng lượng và độ đều trước khi cắt.", h: "2 ngày" },
    { t: "Ráp khung và căng lụa", d: "Khung gỗ được ráp mộng, lụa được căng bằng tay, từng góc một. Mép lụa được viền bằng chỉ tơ, khâu tay theo đường mũi nhỏ.", k: "Lụa được căng ở độ vừa, không kéo quá để tránh xoắn sợi.", h: "2 ngày mỗi bình phong" },
    { t: "Kiểm tra màu và độ căng", d: "Bình phong được đặt dưới ánh sáng ban ngày để kiểm tra màu, rồi gõ nhẹ để nghe độ căng. Chiếc đạt được đánh số 01–30 ở khung sau.", k: "Mỗi số được đăng ký với mã tấm lụa gốc.", h: "1 giờ mỗi chiếc" },
    { t: "Đóng gói từng sản phẩm", d: "Mỗi bình phong được được cuộn trong túi vải và đặt vào ống cứng, bọc giấy kraft và chèn xốp ở các góc, rồi đặt vào thùng có ghi số thứ tự. Khi sản phẩm số 30 được đóng xong, thiết kế được đánh dấu đã đủ số lượng.", k: "Số trên thùng khớp với số trên thẻ sản phẩm, để truy đúng món khi cần.", h: "2 ngày" },
    { t: "Xếp container và niêm phong", d: "30 thùng được xếp chặt trong container, chèn gỗ và đệm chống sốc. Cửa được niêm phong bằng chì số, mã container và số niêm phong được ghi vào hồ sơ. Từ bước này, thiết kế chính thức đóng.", k: "Số niêm phong nằm trong hồ sơ, khách có thể đối chiếu khi nhận hàng.", h: "1 ngày" },
    { t: "Lập hồ sơ xuất khẩu", d: "Hóa đơn, phiếu đóng gói, chứng nhận xuất xứ và tờ khai hải quan được lập. Đơn vị vận tải đối chiếu danh mục hàng với số lượng đã bán để đảm bảo khớp.", k: "Chứng nhận xuất xứ ghi rõ làng nghề, để lô hàng mang đúng câu chuyện của nó.", h: "5–7 ngày" },
    { t: "Vận chuyển về cảng", d: "Container được xe đầu kéo đưa từ xưởng ra cảng xuất khẩu gần nhất. Đoàn xe đi theo lịch đã định, và niêm phong được kiểm tra lại tại cổng cảng.", k: "Niêm phong được kiểm tra hai lần, trước khi rời xưởng và khi vào cảng.", h: "1 ngày" },
    { t: "Lên tàu biển", d: "Container được xếp lên tàu theo lịch, đặt ở vị trí ổn định trên boong. Hành trình trên biển thường kéo dài ba đến bốn tuần, tùy tuyến và cảng trung chuyển.", k: "Vị trí container được theo dõi qua mã vận đơn suốt chặng đường.", h: "3–4 tuần trên biển" },
    { t: "Nhập cảnh và kiểm đếm", d: "Tại cảng đến, hải quan nước nhập khẩu kiểm tra hồ sơ và niêm phong. Container được đưa về kho đối tác, tại đó từng thùng được kiểm đếm lại theo số thứ tự 01 đến 30.", k: "Mỗi thùng được đối chiếu với hồ sơ trước khi xuất kho.", h: "1–2 tuần" },
    { t: "Giao đến khách hàng", d: "Sản phẩm được giao tới khách qua đơn vị giao hàng nội địa tại nước nhận. Khách kiểm tra, xác nhận nhận hàng trên sàn thương mại điện tử, và thiết kế được lưu lại trong bộ sưu tập đã đóng.", k: "Sản phẩm cuối cùng của container được giao kèm thẻ số và giấy chứng nhận.", h: "1–2 tuần" }
  ],
  "phu-vinh-04": [
    { t: "Phác đường cong ghế", d: "Đường cong lưng ghế được lấy từ dáng nôi và ghế nan cổ. Nhà thiết kế vẽ mô hình ba chiều bằng tay rồi kiểm tra góc ngồi bằng mô hình giấy.", k: "Góc lưng ngả 105 độ để ngồi thư giãn mà không cần đệm dày.", h: "2 tuần" },
    { t: "Khung thép và mẫu đan", d: "Khung thép được uốn theo đường cong, hàn kín và làm sạch gỉ. Mẫu đan thử trên một đoạn khung để chọn kiểu đan và độ căng của mây.", k: "Mẫu được thử tải 120 kg trước khi chọn kiểu đan cuối cùng.", h: "3 tuần" },
    { t: "Chọn và ngâm mây tre", d: "Mây và tre được chọn theo độ già, không mắt sâu. Chúng được ngâm nước để dẻo, rồi để ráo bớt trước khi đan.", k: "Chỉ dùng nguyên liệu đủ độ già để tránh nứt khi khô.", h: "5 ngày" },
    { t: "Đan bằng tay", d: "Thợ Phú Vinh đan từng lớp mây theo kiểu đan lục giác, luồn từng sợi qua khung, siết chặt bằng tay. Mỗi ghế cần khoảng hai ngày, và thợ nghỉ khi tay mỏi để giữ độ đều.", k: "Không có dụng cụ điện. Sợi đan được siết theo nhịp để mặt ghế đều và không bị võng.", h: "2 ngày mỗi ghế" },
    { t: "Sơn khung và phủ dầu", d: "Khung thép được sơn đen hai lớp, chờ khô rồi chà mịn. Mây tre được phủ dầu bảo vệ, để tránh ẩm và mốc khi dùng trong nhà.", k: "Lớp sơn được chọn không độc và không có mùi nặng.", h: "1 ngày mỗi ghế" },
    { t: "Thử tải và kiểm tra", d: "Mỗi ghế được thử tải và xoay nhẹ để kiểm tra mối đan, mối hàn và độ vững. Ghế đạt được đánh số 01–20 dưới đáy khung.", k: "Mỗi ghế được ngồi thử bởi người kiểm định trước khi đóng.", h: "1 giờ mỗi ghế" },
    { t: "Đóng gói từng sản phẩm", d: "Mỗi ghế được được tháo chân, bọc vải và xếp chồng, bọc giấy kraft và chèn xốp ở các góc, rồi đặt vào thùng có ghi số thứ tự. Khi sản phẩm số 20 được đóng xong, thiết kế được đánh dấu đã đủ số lượng.", k: "Số trên thùng khớp với số trên thẻ sản phẩm, để truy đúng món khi cần.", h: "2 ngày" },
    { t: "Xếp container và niêm phong", d: "20 thùng được xếp chặt trong container, chèn gỗ và đệm chống sốc. Cửa được niêm phong bằng chì số, mã container và số niêm phong được ghi vào hồ sơ. Từ bước này, thiết kế chính thức đóng.", k: "Số niêm phong nằm trong hồ sơ, khách có thể đối chiếu khi nhận hàng.", h: "1 ngày" },
    { t: "Lập hồ sơ xuất khẩu", d: "Hóa đơn, phiếu đóng gói, chứng nhận xuất xứ và tờ khai hải quan được lập. Đơn vị vận tải đối chiếu danh mục hàng với số lượng đã bán để đảm bảo khớp.", k: "Chứng nhận xuất xứ ghi rõ làng nghề, để lô hàng mang đúng câu chuyện của nó.", h: "5–7 ngày" },
    { t: "Vận chuyển về cảng", d: "Container được xe đầu kéo đưa từ xưởng ra cảng xuất khẩu gần nhất. Đoàn xe đi theo lịch đã định, và niêm phong được kiểm tra lại tại cổng cảng.", k: "Niêm phong được kiểm tra hai lần, trước khi rời xưởng và khi vào cảng.", h: "1 ngày" },
    { t: "Lên tàu biển", d: "Container được xếp lên tàu theo lịch, đặt ở vị trí ổn định trên boong. Hành trình trên biển thường kéo dài ba đến bốn tuần, tùy tuyến và cảng trung chuyển.", k: "Vị trí container được theo dõi qua mã vận đơn suốt chặng đường.", h: "3–4 tuần trên biển" },
    { t: "Nhập cảnh và kiểm đếm", d: "Tại cảng đến, hải quan nước nhập khẩu kiểm tra hồ sơ và niêm phong. Container được đưa về kho đối tác, tại đó từng thùng được kiểm đếm lại theo số thứ tự 01 đến 20.", k: "Mỗi thùng được đối chiếu với hồ sơ trước khi xuất kho.", h: "1–2 tuần" },
    { t: "Giao đến khách hàng", d: "Sản phẩm được giao tới khách qua đơn vị giao hàng nội địa tại nước nhận. Khách kiểm tra, xác nhận nhận hàng trên sàn thương mại điện tử, và thiết kế được lưu lại trong bộ sưu tập đã đóng.", k: "Sản phẩm cuối cùng của container được giao kèm thẻ số và giấy chứng nhận.", h: "1–2 tuần" }
  ]
};

const fmt = n => "US$" + n.toLocaleString("en-US");
let state = load();

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    return { sold: s.sold || {}, cart: s.cart || {} };
  } catch { return { sold: {}, cart: {} }; }
}
function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

const soldOf = c => state.sold[c.id] || 0;
const inCartOf = c => state.cart[c.id] || 0;
const remaining = c => Math.max(0, c.capacity - soldOf(c));
const isClosed = c => remaining(c) === 0;
const opensAt = c => new Date(c.opens).getTime();
const isUpcoming = c => !isClosed(c) && Date.now() < opensAt(c);
const opensLabel = c => new Date(c.opens).toLocaleString("vi-VN", { timeZone: "Asia/Bangkok", day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
function countdownText(c) {
  let d = Math.max(0, opensAt(c) - Date.now());
  const days = Math.floor(d / 86400000); d %= 86400000;
  const h = Math.floor(d / 3600000); d %= 3600000;
  const m = Math.floor(d / 60000); const sec = Math.floor((d % 60000) / 1000);
  const pad = n => String(n).padStart(2, "0");
  return `${days} ngày ${pad(h)}:${pad(m)}:${pad(sec)}`;
}

function serialTiles(c) {
  // Số 1..capacity: số đã bán gạch đi, số tiếp theo được đánh dấu.
  let html = "";
  const next = soldOf(c) + 1;
  for (let n = 1; n <= c.capacity; n++) {
    const cls = n <= soldOf(c) ? "sold" : (n === next && !isClosed(c) ? "next" : "");
    html += `<span class="serial ${cls}">${String(n).padStart(2, "0")}</span>`;
  }
  return html;
}

function renderGrid() {
  const grid = document.getElementById("grid");
  const filter = document.querySelector(".filter.active").dataset.filter;
  const list = COLLECTIONS.filter(c => filter === "all" || (filter === "open" ? !isClosed(c) : isClosed(c)));
  if (!list.length) { grid.innerHTML = `<p class="empty">Chưa có thiết kế nào trong mục này.</p>`; return; }
  grid.innerHTML = list.map(c => {
    const closed = isClosed(c);
    const left = remaining(c);
    const sold = soldOf(c);
    const pct = Math.round(sold / c.capacity * 100);
    const upcoming = isUpcoming(c);
    const badge = closed ? `<span class="badge closed">Đã ngừng sản xuất</span>`
      : upcoming ? `<span class="badge soon">Sắp mở bán</span>`
      : left <= 5 ? `<span class="badge low">Còn ${left} sản phẩm</span>`
      : `<span class="badge">Đang bán</span>`;
    const idx = COLLECTIONS.indexOf(c);
    const next = COLLECTIONS.slice(idx + 1).find(x => !isClosed(x));
    const inCart = inCartOf(c);
    const launch = upcoming
      ? `<div class="launch"><span>Mở bán ${opensLabel(c)}</span><strong data-countdown="${c.id}">${countdownText(c)}</strong></div>`
      : "";
    const action = closed
      ? `<button class="btn full" disabled>Đã ngừng sản xuất</button>`
      : upcoming
      ? `<button class="btn full" disabled>Chờ đến giờ mở bán</button>`
      : `<button class="btn primary full" data-add="${c.id}">Thêm vào giỏ · ${fmt(c.price)}</button>`;
    return `
    <article class="card ${closed ? "is-closed" : ""}">
      <a class="card-art" href="#hanh-trinh/${c.id}"><img src="${c.img}" alt="${c.name}" loading="lazy">${badge}</a>
      <div class="card-body">
        <h3>${c.name}</h3>
        <p class="type">${c.type} · ${fmt(c.price)}</p>
        <p class="specs">Kích thước: ${c.dims} · Cân nặng: ${c.weight}</p>
        <p>${c.desc}</p>
        <div class="meter">
          <div class="meter-label"><span>Container ${c.capacity} sản phẩm · đánh số 01–${String(c.capacity).padStart(2, "0")}</span><span>${closed ? "Đã đóng" : `Đã bán ${sold}/${c.capacity}`}</span></div>
          <div class="meter-track"><div class="meter-fill" style="width:${pct}%"></div></div>
        </div>
        <div class="serials">${serialTiles(c)}</div>
        ${launch}
        ${closed ? `<div class="closed-note">Container đã đóng. Thiết kế này đã ngừng sản xuất và được lưu trữ, không tái bản.${next ? ` Thiết kế tiếp theo: <strong>${next.name}</strong>.` : ""}</div>` : ""}
        <a class="journey-btn" href="#hanh-trinh/${c.id}">Xem hành trình sản xuất →</a>
        ${inCart ? `<p class="incart">Trong giỏ: ${inCart} sản phẩm</p>` : ""}
        ${action}
      </div>
    </article>`;
  }).join("");
  loadStepVideos();
}

// Video quy trình chỉ hiện khi file tồn tại trong thư mục media/.
function loadStepVideos() {
  document.querySelectorAll("video[data-video]").forEach(v => {
    fetch(v.dataset.video, { method: "HEAD" }).then(r => {
      if (r.ok) { v.src = v.dataset.video; v.hidden = false; v.parentElement.classList.add("has-video"); }
    }).catch(() => {});
  });
}

function addToCart(id) {
  const c = COLLECTIONS.find(x => x.id === id);
  if (!c) return;
  if (isUpcoming(c)) return toast(`Thiết kế này mở bán vào ${opensLabel(c)}.`);
  if (inCartOf(c) + soldOf(c) >= c.capacity) return toast("Đã hết sản phẩm trong container này.");
  state.cart[c.id] = inCartOf(c) + 1;
  save(); renderAll(); toast(`Đã thêm ${c.name} · số ${String(soldOf(c) + inCartOf(c)).padStart(2, "0")}`);
}

function changeQty(id, delta) {
  const c = COLLECTIONS.find(x => x.id === id);
  if (!c) return;
  const q = inCartOf(c) + delta;
  if (delta > 0 && q + soldOf(c) > c.capacity) return toast("Đã hết sản phẩm trong container này.");
  if (q <= 0) delete state.cart[c.id]; else state.cart[c.id] = q;
  save(); renderAll();
}

function renderCart() {
  const wrap = document.getElementById("cartItems");
  let total = 0, count = 0;
  const items = COLLECTIONS.filter(c => inCartOf(c) > 0);
  if (!items.length) wrap.innerHTML = `<p class="cart-empty">Giỏ hàng đang trống.</p>`;
  else wrap.innerHTML = items.map(c => {
    const q = inCartOf(c);
    total += c.price * q; count += q;
    const first = soldOf(c) + 1;
    return `<div class="cart-row">
      <div><strong>${c.name}</strong><br><small>${c.type} · số ${String(first).padStart(2, "0")}–${String(first + q - 1).padStart(2, "0")}</small></div>
      <div style="text-align:right">${fmt(c.price * q)}</div>
      <div class="qty"><button data-dec="${c.id}">−</button><span>${q}</span><button data-inc="${c.id}">+</button></div>
      <button class="remove" data-remove="${c.id}">Xóa</button>
    </div>`;
  }).join("");
  document.getElementById("cartTotal").textContent = fmt(total);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("checkoutBtn").disabled = !items.length;
}

function checkout() {
  const justClosed = [];
  COLLECTIONS.forEach(c => {
    const q = inCartOf(c);
    if (!q) return;
    state.sold[c.id] = soldOf(c) + q;
    if (isClosed(c)) justClosed.push(c.name);
  });
  state.cart = {};
  save(); renderAll(); closeCart();
  toast(justClosed.length ? `Đơn đã ghi nhận. ${justClosed.join(", ")} vừa đóng container.` : "Đơn hàng đã được ghi nhận.");
}

function renderAll() { renderGrid(); renderCart(); }

function openCart() { document.getElementById("drawer").classList.add("open"); document.getElementById("overlay").hidden = false; }
function closeCart() { document.getElementById("drawer").classList.remove("open"); document.getElementById("overlay").hidden = true; }

let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

document.addEventListener("click", e => {
  const t = e.target;
  if (t.dataset.add) addToCart(t.dataset.add);
  else if (t.dataset.inc) changeQty(t.dataset.inc, 1);
  else if (t.dataset.dec) changeQty(t.dataset.dec, -1);
  else if (t.dataset.remove) { delete state.cart[t.dataset.remove]; save(); renderAll(); }
});
document.querySelectorAll(".filter").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
  b.classList.add("active"); renderGrid();
}));
document.querySelectorAll(".topbar nav a").forEach(a => a.addEventListener("click", e => {
  e.preventDefault();
  const target = a.getAttribute("href").slice(1);
  if (location.hash === "#" + target) { route(); document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }); }
  else location.hash = target;
}));
document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("overlay").addEventListener("click", closeCart);
document.getElementById("checkoutBtn").addEventListener("click", checkout);

function renderJourneyPage(id) {
  const c = COLLECTIONS.find(x => x.id === id);
  const view = document.getElementById("journeyView");
  if (!c) { view.innerHTML = `<p class="empty">Không tìm thấy thiết kế này.</p><a class="btn ghost" href="#collections">Về danh sách thiết kế</a>`; return; }
  const sold = soldOf(c), closed = isClosed(c);
  const upcoming = isUpcoming(c);
  const status = closed ? "Lưu trữ · đã ngừng sản xuất" : upcoming ? `Mở bán ${opensLabel(c)}` : `Đã bán ${sold}/${c.capacity}`;
  view.innerHTML = `
    <a class="back" href="#collections">← Tất cả thiết kế</a>
    <figure class="jp-cover"><img src="${c.img}" alt="${c.name}"></figure>
    <header class="jp-head">
      <p class="origin">${c.village}</p>
      <h1>${c.name}</h1>
      <p class="jp-lead">${c.desc}</p>
      <dl class="jp-facts">
        <div><dt>Loại sản phẩm</dt><dd>${c.type}</dd></div>
        <div><dt>Container</dt><dd>${c.capacity} sản phẩm, đánh số 01–${String(c.capacity).padStart(2, "0")}</dd></div>
        <div><dt>Kích thước</dt><dd>${c.dims}</dd></div>
        <div><dt>Cân nặng</dt><dd>${c.weight}</dd></div>
        <div><dt>Trạng thái</dt><dd>${status}</dd></div>
        <div><dt>Giá</dt><dd>${fmt(c.price)}</dd></div>
      </dl>
    </header>
    <ol class="jp-timeline">${JOURNEYS[c.id].map((st, i) => {
      const n = String(i + 1).padStart(2, "0");
      return `
      <li class="jp-step">
        <div class="jp-marker"><span>${n}</span></div>
        <div class="jp-body">
          <div class="jp-meta"><small>${st.h}</small></div>
          <h2>${st.t}</h2>
          <p>${st.d}</p>
          <p class="craft">${st.k}</p>
          <div class="step-media"><span class="ph"><b>${n}</b><em>${st.t}</em></span><img src="media/${c.id}/${n}.jpg" alt="${st.t}" loading="lazy" onerror="this.parentElement.classList.add('empty')"><video data-video="media/${c.id}/${n}.mp4" controls playsinline preload="none" hidden></video></div>
        </div>
      </li>`;
    }).join("")}
    </ol>
    <div class="jp-foot">
      ${closed ? `<button class="btn full" disabled>Đã ngừng sản xuất</button>` : upcoming ? `<div class="launch"><span>Mở bán ${opensLabel(c)}</span><strong data-countdown="${c.id}">${countdownText(c)}</strong></div>` : `<button class="btn primary" data-add="${c.id}">Thêm vào giỏ · ${fmt(c.price)}</button>`}
    </div>`;
  loadStepVideos();
}

const VILLAGES = {
  "dong-ky": {
    name: "Làng chạm gỗ Đồng Kỵ", place: "Từ Sơn, Bắc Ninh", img: "images/dong-ky.jpg", design: "dong-ky-01",
    lead: "Tiếng đục gỗ đã vang trong làng này qua nhiều thế hệ. Ở đây, người thợ chạm khắc bằng tay và đọc gỗ trước khi đặt dao.",
    posts: [
      { h: "Mở đầu", t: "Một làng, một nghề", p: "Đồng Kỵ được biết đến với nghề chạm gỗ. Các gia đình truyền nghề từ đời này sang đời khác, mỗi xưởng giữ một lối chạm riêng." },
      { h: "Chất liệu", t: "Đọc thớ gỗ trước khi chạm", p: "Thợ chọn gỗ theo thớ và độ khô. Gỗ đúng sẽ giữ được đường gờ sắc mà không nứt khi chạm sâu." },
      { h: "Kỹ thuật", t: "Chạm nổi, chạm lộng, chạm bong", p: "Mỗi lối chạm cho một hiệu quả khác nhau về bóng và chiều sâu. Người thợ thường chạm thử trên gỗ thừa trước khi làm chi tiết chính." },
      { h: "Ứng dụng đương đại", t: "Giữ đường gờ, bỏ hoa văn dư", p: "Trong thiết kế Tủ Đồng Kỵ, đường gờ chạm được tiết chế thành khối phẳng để hợp với căn hộ hiện đại, nhưng vẫn giữ nhịp của nghề gốc." }
    ]
  },
  "bat-trang": {
    name: "Làng gốm Bát Tràng", place: "Gia Lâm, Hà Nội", img: "images/bat-trang.jpg", design: "bat-trang-02",
    lead: "Đất sét sông Hồng, lửa lò và bàn tay người thợ tạo nên những món gốm quen thuộc của làng từ nhiều thế kỷ.",
    posts: [
      { h: "Mở đầu", t: "Làng gốm bên bờ sông", p: "Bát Tràng gắn với nghề gốm sứ lâu đời. Nhiều xưởng vẫn làm thủ công, từ nhào đất đến tráng men và nung." },
      { h: "Chất liệu", t: "Đất, men và lửa", p: "Đất được nhào kỹ để bớt khí. Men được pha và tráng tay, nên mỗi món có độ dày và màu khác nhau một chút." },
      { h: "Kỹ thuật", t: "Dáng bầu và men rạn", p: "Thợ vuốt dáng bằng tay trên bàn xoay. Men rạn xuất hiện trong lò nung khi men và thân gốm co giãn khác nhau." },
      { h: "Ứng dụng đương đại", t: "Dáng cũ, công năng mới", p: "Ghế đôn Bát Tràng giữ dáng bầu truyền thống, đặt trên khung gỗ sồi tối giản để dùng làm ghế phụ hoặc bàn nhỏ." }
    ]
  },
  "van-phuc": {
    name: "Làng lụa Vạn Phúc", place: "Hà Đông, Hà Nội", img: "images/van-phuc.jpg", design: "van-phuc-03",
    lead: "Tơ tằm được kéo, nhuộm và dệt bằng tay. Mỗi tấm lụa mang độ mềm và ánh sáng riêng của người dệt.",
    posts: [
      { h: "Mở đầu", t: "Tiếng khung cửi giữa phố", p: "Vạn Phúc là làng lụa lâu đời bên dòng Nhuệ. Nghề dệt được giữ qua nhiều đời, từ kéo tơ đến dệt thành tấm." },
      { h: "Chất liệu", t: "Tơ tằm và màu nhuộm", p: "Tơ được ươm và kéo sợi trước khi nhuộm. Độ đều của sợi quyết định độ mềm và độ bóng của tấm lụa." },
      { h: "Kỹ thuật", t: "Dệt tay và căng khung", p: "Khung cửi và thao tác dệt tay giữ độ đều cho từng lớp. Sau khi dệt, lụa được căng để giữ phẳng và ổn định." },
      { h: "Ứng dụng đương đại", t: "Lụa trên khung gỗ", p: "Bình phong Vạn Phúc đặt lụa tơ tằm lên khung gỗ, tạo lớp sáng dịu cho không gian và phân chia phòng mà không nặng nề." }
    ]
  },
  "phu-vinh": {
    name: "Làng mây tre đan Phú Vinh", place: "Phú Xuyên, Hà Nội", img: "images/phu-vinh.jpg", design: "phu-vinh-04",
    lead: "Tre và mây được chẻ, vót và đan bằng tay. Nghề này cho ra những món nhẹ, chắc và thoáng.",
    posts: [
      { h: "Mở đầu", t: "Làng của tre và mây", p: "Phú Vinh có nghề đan mây tre từ lâu. Nhiều hộ gia đình cùng làm, từ chẻ nan đến hoàn thiện sản phẩm." },
      { h: "Chất liệu", t: "Chọn tre và mây", p: "Tre được chọn độ già vừa đủ và được hong khô. Mây được làm mềm trước khi đan để không gãy khi uốn." },
      { h: "Kỹ thuật", t: "Đan theo lối cổ", p: "Người thợ đan từng lớp và giữ nhịp đều để khung chắc. Các mối nối được cố định kỹ để ghế chịu lực tốt." },
      { h: "Ứng dụng đương đại", t: "Đan mây, khung thép đen", p: "Ghế lounge Phú Vinh giữ lối đan cổ và dùng khung thép sơn đen để dáng ghế gọn, hợp với nhà ở hiện đại." }
    ]
  }
};

function renderVillagePage(id) {
  const v = VILLAGES[id];
  const view = document.getElementById("journeyView");
  if (!v) { view.innerHTML = `<p class="empty">Không tìm thấy làng nghề này.</p><a class="btn ghost" href="#story">Về danh sách làng nghề</a>`; return; }
  view.innerHTML = `
    <a class="back" href="#story">← Tất cả làng nghề</a>
    <figure class="jp-cover"><img src="${v.img}" alt="${v.name}"></figure>
    <header class="jp-head">
      <p class="origin">${v.place}</p>
      <h1>${v.name}</h1>
      <p class="jp-lead">${v.lead}</p>
    </header>
    <article class="village-post">
      ${v.posts.map((p, i) => `
      <section class="vp-part">
        <p class="vp-kicker">${String(i + 1).padStart(2, "0")} · ${p.h}</p>
        <h2>${p.t}</h2>
        <p>${p.p}</p>
      </section>`).join("")}
    </article>
    <div class="jp-foot">
      <a class="btn primary" href="#hanh-trinh/${v.design}">Xem hành trình sản xuất của thiết kế →</a>
    </div>`;
}


function containerDiagram() {
  // Sơ đồ minh họa: 24 ô = 24 sản phẩm của một container. 17 ô đã bán, ô 18 đang chờ, còn lại trống.
  const cols = 6, rows = 4, size = 84, gap = 10, pad = 24;
  const W = pad * 2 + cols * size + (cols - 1) * gap;
  const H = pad * 2 + rows * size + (rows - 1) * gap + 60;
  let cells = "";
  for (let n = 1; n <= 24; n++) {
    const i = n - 1, x = pad + (i % cols) * (size + gap), y = pad + Math.floor(i / cols) * (size + gap);
    const cls = n <= 17 ? "sold" : n === 18 ? "next" : "free";
    cells += `<g class="cd-${cls}"><rect x="${x}" y="${y}" width="${size}" height="${size}" rx="2"/><text x="${x + size / 2}" y="${y + size / 2 + 6}" text-anchor="middle">${String(n).padStart(2, "0")}</text></g>`;
  }
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Container 24 sản phẩm, đã bán 17 số, đang chờ số 18" class="container-diagram">
    <rect x="0" y="0" width="${W}" height="${H}" fill="#F4EEE4"/>
    ${cells}
    <text x="${pad}" y="${H - 22}" class="cd-caption">Container 24 sản phẩm · đã bán 01–17 · số tiếp theo: 18 · khi 24 được bán, container đóng</text>
  </svg>`;
}

function renderConceptPage() {
  const view = document.getElementById("conceptView");
  const rows = COLLECTIONS.map(c => {
    const sold = soldOf(c);
    const left = Math.max(c.capacity - sold, 0);
    const state = isClosed(c) ? "Đã khép lại" : isUpcoming(c) ? "Sắp mở" : "Đang mở";
    return `<tr><td>${c.name}</td><td>${c.capacity}</td><td>${isClosed(c) ? 0 : left}</td><td>${state}</td></tr>`;
  }).join("");
  view.innerHTML = `
    <a class="back" href="#top">← Trang chủ</a>
    <figure class="jp-cover concept-cover"><img src="images/container.jpg" alt="Container hàng thủ công tại cảng"></figure>
    <header class="jp-head concept-head">
      <p class="origin">Concept bán hàng · Curator 9202</p>
      <h1>Một container. Một thiết kế. Không bao giờ có lần hai.</h1>
      <p class="jp-lead">Mỗi món trong Curator 9202 được làm bằng tay từ một làng nghề Việt Nam, và chỉ tồn tại trong đúng một container. Khi số cuối cùng được bán ra, thiết kế ấy khép lại mãi mãi.</p>
      <div class="hero-actions"><a class="btn primary" href="#collections">Xem món đang mở bán →</a><a class="btn ghost" href="#story">Tìm hiểu làng nghề</a></div>
    </header>

    <section class="concept-block">
      <p class="vp-kicker">Vì sao phải giới hạn</p>
      <h2>Người thợ chỉ làm được bao nhiêu thì làm bấy nhiêu</h2>
      <p>Chạm khảm xà cừ, men rạn, dệt lụa hay đan mây đều cần thời gian và đôi tay quen việc. Giới hạn theo container giữ cho mỗi lô đủ chất lượng, và không ai phải làm vội để kịp đơn hàng tiếp theo.</p>
    </section>

    <section class="concept-block">
      <p class="vp-kicker">Hình dung một container</p>
      <h2>24 số, một thiết kế, và một lần đóng lại</h2>
      <figure class="concept-figure">${containerDiagram()}</figure>
    </section>

    <section class="concept-block">
      <p class="vp-kicker">Số thứ tự của bạn</p>
      <h2>Mỗi món có một số riêng, từ 01 đến số cuối</h2>
      <p>Sản phẩm của bạn sẽ mang số thứ tự trong lô đó. Khi bạn nhìn thấy số ấy, bạn biết mình đang cầm đúng một trong số ít món còn lại trên thế giới.</p>
      <div class="concept-numbers">${[1,2,3,4,5,6,7,8,9,10,11,12].map(n => `<span>${String(n).padStart(2, "0")}</span>`).join("")}<em>…</em><span class="last">Số cuối</span></div>
    </section>

    <section class="concept-block">
      <p class="vp-kicker">Khi container đầy</p>
      <h2>Thiết kế khép lại, không đặt thêm, không tái bản</h2>
      <p>Sau khi container đóng, thiết kế được đưa vào lưu trữ như một phiên bản đã hoàn tất. Không sản xuất thêm, kể cả khi có người muốn mua. Đó là lý do món bạn đang có là món hiếm.</p>
    </section>

    <section class="concept-block">
      <p class="vp-kicker">Tình trạng các lô hiện tại</p>
      <table class="concept-table">
        <thead><tr><th>Thiết kế</th><th>Tổng container</th><th>Còn lại</th><th>Trạng thái</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>

    <section class="concept-block concept-cta">
      <p class="vp-kicker">Sở hữu một món</p>
      <h2>Thứ bạn có hôm nay sẽ không được làm lại</h2>
      <p>Một món đồ nội thất từ làng nghề Việt, có số thứ tự riêng, sản xuất trong đúng một container và không bao giờ có bản thứ hai.</p>
      <a class="btn primary" href="#collections">Chọn món của bạn →</a>
    </section>`;
}

function route() {
  const h = location.hash;
  const jp = h.startsWith("#hanh-trinh/");
  const vp = h.startsWith("#lang-nghe/");
  const cp = h === "#concept";
  const sub = jp || vp || cp;
  document.getElementById("home").hidden = sub;
  document.getElementById("journeyView").hidden = !(jp || vp);
  document.getElementById("conceptView").hidden = !cp;
  if (cp) {
    renderConceptPage();
    window.scrollTo(0, 0);
  } else if (jp) {
    renderJourneyPage(decodeURIComponent(h.slice("#hanh-trinh/".length)));
    window.scrollTo(0, 0);
  } else if (vp) {
    renderVillagePage(decodeURIComponent(h.slice("#lang-nghe/".length)));
    window.scrollTo(0, 0);
  } else if (h.length > 1) {
    const el = document.getElementById(h.slice(1));
    if (el) el.scrollIntoView();
  }
}
window.addEventListener("hashchange", route);

// Đếm ngược mở bán; đến giờ thì tự mở khóa nút mua.
let wasUpcoming = COLLECTIONS.map(c => isUpcoming(c));
setInterval(() => {
  const now = COLLECTIONS.map(c => isUpcoming(c));
  if (now.some((u, i) => u !== wasUpcoming[i])) { wasUpcoming = now; renderAll(); if (location.hash.startsWith("#hanh-trinh/")) route(); return; }
  document.querySelectorAll("[data-countdown]").forEach(el => {
    const c = COLLECTIONS.find(x => x.id === el.dataset.countdown);
    if (c) el.textContent = countdownText(c);
  });
}, 1000);

renderAll();
route();
