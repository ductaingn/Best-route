# Trong tệp Flask (app.py)
from flask import Flask, request, jsonify
import astar

app = Flask(__name__)

received_text = ""

@app.route("/send_data", methods=["GET", "POST"])
def handle_data():
    global received_text

    if request.method == "GET":
        # Gọi hàm astar và truyền dữ liệu (ở đây là 1234)
        received_text = astar.astar(1234)

        # Trả về kết quả làm chuỗi trong yêu cầu GET
        return received_text

    if request.method == "POST":
        if request.headers["Content-Type"] == "application/json":
            data = request.json
            position = data.get("positions", "")

            # Gọi hàm astar và truyền dữ liệu (ở đây là position)
            received_text = astar.astar(position)

            # In kết quả ra console
            print(f"Nội dung từ React: {position}")

            # Trả về một thông báo trong yêu cầu POST (nếu cần)
            return "Dữ liệu đã được nhận và xử lý bởi Flask."

if __name__ == "__main__":
    app.run(debug=True)
