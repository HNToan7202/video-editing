module.exports = {
    // Thư mục chứa các bộ kiểm tra
    roots: ['./src/test'],
    testSequencer: './src/test/test-sequencer.cjs',
 
    // Cấu hình Jest sử dụng trình báo cáo HTML để tạo báo cáo
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './reports/html-report',
                filename: 'report.html',
                expand: true,
            },
        ],
    ],
    
};
