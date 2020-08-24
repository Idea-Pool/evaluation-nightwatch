module.exports = {
    src_folders: ["./tests/test-cases"],
    webdriver: {
        start_process: true,
        server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
        port: 9515
    },
    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: "chrome"
            },
            launch_url: "https://angular.io"
        }
    },
    page_objects_path: "./tests/pages",
    custom_commands_path: "./tests/commands"
};
