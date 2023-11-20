# Trong tệp Flask (app.py)
from flask import Flask, request, jsonify
import a_star
import node_id_to_latlon

app = Flask(__name__)

received_text = ""


@app.route("/send_data", methods=["GET", "POST"])
def handle_data():
    global received_text

    if request.method == "GET":
        # Trả về kết quả làm chuỗi trong yêu cầu GET
        return jsonify(received_text)

    if request.method == "POST":
        if request.headers["Content-Type"] == "application/json":
            data = request.json
            position = data.get("positions", "")

            # Trả về một thông báo trong yêu cầu POST (nếu cần)
            if(len(position)==0):
                return "Empty list"
            list_of_node = a_star.a_star(position[0],position[1])
            received_text = node_id_to_latlon.id_to_latlon(list_of_node)
            return jsonify(received_text)


if __name__ == "__main__":
    app.run(debug=True)
