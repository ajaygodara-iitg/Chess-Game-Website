#include <uwebsockets/App.h>

ChessGame game;

int main() {
    uWS::App().ws<PerSocketData>("/*", {
        .open = [](auto* ws) {
            std::cout << "Client connected\n";
        },
        .message = [](auto* ws, std::string_view message, uWS::OpCode opCode) {
            // Parse and handle the message (e.g., move command)
            std::string response = "Move acknowledged";
            ws->send(response, opCode);
        },
        .close = [](auto* ws, int code, std::string_view message) {
            std::cout << "Client disconnected\n";
        }
    }).listen(9001, [](auto* token) {
        if (token) {
            std::cout << "Listening on port 9001\n";
        }
    }).run();
}
