# Angular là một nền tảng phát triển, được xây dựng trên TypeScript.
# Điều kiện 
+ HTMl
+ CSS
+ JavaScript

#  setup
+ npm install -g @angular/cli : để được cài đặt Angular
+ ng new <project name> Tạo một thư mục với tên dự án , tạo ra các tệp và thư mục cần thiết cho dự án
+ cd  <project name> : Đi vào thư mục của dự án đó
+ ng serve : Khởi động máy chủ được chạy trên [local](http://localhost:4200/)

+ 'ng g c product-tlist' : tạo ra các thành phần trong dự án trong dự án tên "product-list" bao gồm ( HTML, CSS, SPEC.TS, TS)

# 1: Trình bài xây dựng 1 ứng dụng 
+ <app-root> : Thành phần đầu tiên để tải và container cho các thành phần khác
+ <app-top-bar> : Tên cửa hàng và nút thanh toán 
+ <app-product-list> : Danh sách sản phẩm
+ <app-product-alerts> : 1 phần chứa các cảnh bảo cho ứng dựng 

# 2. Các chức năng
+ Tạo danh sách sản phẩm:
  - *ngFor : dùng để lặp qua 1 danh sách các phần tử và tạo ra các phần tử trong HTML tương ứng.

  - {{ product.name }} : được hiển thị tên sản phẩm.

  - <a [title]="product.name + ' details'">
      {{ product.name }} : Dùng để ràng buộc thuộc tính. 

   - export interface Product { }: Giao diện "Product" định nghĩa cấu trúc của một đối tượng trong sản phẩm

    - export class ProductListComponent {products = products;} : Dùng để chứa các sản phẩm trong "products"

    - *ngIf="product.description" : dùng để kiểm tra các thuộc tính bên trong có tồn tại hay không 

    - <button type="button" (click)="share()"> Share</button> :  Sự kiện click sẽ gọi đến share() sản phẩm được chia sẽ

    - [routerLink]="['/'] : Đây là cú pháp để xác định URL mục tiêu được liên kết đưa người dùng trang chính của ứng dụng 

    -@Component() : là một decorator được sử dụng để đánh dấu một lớp là một component:
        'selector': sử dụng để triển khai component trong các template
        'templateUrl': Đường dẫn đến file HTML của component, nơi bạn định nghĩa giao diện của component.
        'styleUrls': Một mảng chứa đường dẫn đến các file CSS của component, nơi bạn có thể định nghĩa kiểu dáng cho component.
    
    -  @Input() được sử dụng để khai báo thuộc tính product là một đầu vào của component

    - *ngIf="product && product.price > 500": Đây là cú pháp cấu trúc điều kiện của Angular. Nếu product tồn tại và price của product lớn hơn 500, thì phần tử <p> và nút "Notify Me" sẽ được hiển thị. Nếu không, chúng sẽ bị ẩn đi.

    - @Output() notify = new EventEmitter(): dùng phát ra một sự kiện khi giá trị của thuộc tính thay

    - notify.emit() : Thông báo cho tôi bằng liên kết sự kiện để dọi phương thức

    - path: '' đại diện cho đường dẫn mặc định 

    - path: 'products/:productId' đại diện cho một đường dẫn động, với :productId là một tham số được truyền vào

    - Đoạn mã [routerLink]="['/products', product.id]" : được sử dụng để tạo một liên kết đến một địa chỉ URL cụ thể trong ứng dụng của bạn, với product.id được sử dụng để xác định sản phẩm cụ thể bạn muốn hiển thị chi tiết.

    - ActivatedRoute là một service được sử dụng để cung cấp thông tin về route hiện tại được tải vào ứng dụng.

    - ngOnInit(): để lấy thông tin về sản phẩm dựa trên productId từ route hiện tại và gán cho thuộc tính product của component.

    - @Injectable({ providedIn: 'root' }): Decorator @Injectable() được sử dụng để gắn kết metadata với service