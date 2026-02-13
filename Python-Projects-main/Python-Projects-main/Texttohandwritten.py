from PIL import Image, ImageDraw, ImageFont

def text_to_handwriting(text, output_path="handwritten.png"):
    img = Image.new("RGB", (800, 400), "white")  
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("arial.ttf", 30)  
    except IOError:
        print("⚠ Font not found, using default font.")
        font = ImageFont.load_default()

    draw.text((50, 50), text, font=font, fill="black")  
    img.save(output_path)
    print(f"✅ Handwritten text saved as {output_path}")

text_to_handwriting("Hello, I am a text to handwritten text converter")
