import pyqrcode

# Define the text to encode in the QR code
text = ['https://ttties.io', 'http://:ttties.io',  ]

# Generate the QR code object
qr = pyqrcode.create(text, version=1, error='L', mode='alphanumeric')

# Get the QR code as a list of lists of booleans
qr_list = qr.get_matrix()

# Print the QR code as a grid of squares
for row in qr_list:
    row_str = ''.join(['██' if val else '  ' for val in row])
    print(row_str)