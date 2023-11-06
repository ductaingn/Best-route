# Trong tệp Flask (app.py)
from flask import Flask, request, jsonify, Response
import a_star

app = Flask(__name__)

received_text = ""


@app.route("/send_data", methods=["GET", "POST"])
def handle_data():
    global received_text

    if request.method == "GET":
        received_text = a_star.a_star(
            [21.0347047, 105.8143796], [21.0346086, 105.8147965])
        # Trả về kết quả làm chuỗi trong yêu cầu GET
        return jsonify(received_text)

    if request.method == "POST":
        if request.headers["Content-Type"] == "application/json":
            data = request.json
            position = data.get("positions", "")

            # Gọi hàm a_star và truyền dữ liệu (ở đây là position)
            received_text = a_star.a_star(position)

            # In kết quả ra console
            print(f"Nội dung từ React: {position}")

            # Trả về một thông báo trong yêu cầu POST (nếu cần)
            return "Dữ liệu đã được nhận và xử lý bởi Flask."


if __name__ == "__main__":
    app.run(debug=True)
