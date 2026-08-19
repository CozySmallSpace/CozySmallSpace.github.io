from PIL import Image, ImageDraw

SIZE = 800
ACCENT = (201, 111, 74)
ACCENT_DARK = (168, 90, 57)
CREAM = (250, 248, 245)
INK = (43, 38, 32)

img = Image.new("RGB", (SIZE, SIZE), ACCENT)
draw = ImageDraw.Draw(img)

# vertical gradient background (accent -> accent_dark), stays within the circle Pinterest will crop to
for y in range(SIZE):
    t = y / SIZE
    r = int(ACCENT[0] + (ACCENT_DARK[0]-ACCENT[0])*t)
    g = int(ACCENT[1] + (ACCENT_DARK[1]-ACCENT[1])*t)
    b = int(ACCENT[2] + (ACCENT_DARK[2]-ACCENT[2])*t)
    draw.line([(0,y),(SIZE,y)], fill=(r,g,b))

cx, cy = SIZE//2, SIZE//2 + 10

# simple house icon, centered, in cream white
roof_w = 320
roof_h = 190
base_w = 260
base_h = 190

roof_top = (cx, cy - roof_h - base_h//2 + 40)
roof_left = (cx - roof_w//2, cy - base_h//2 + 40)
roof_right = (cx + roof_w//2, cy - base_h//2 + 40)
draw.polygon([roof_top, roof_left, roof_right], fill=CREAM)

base_left = cx - base_w//2
base_top = cy - base_h//2 + 40
base_right = cx + base_w//2
base_bottom = base_top + base_h
draw.rectangle([base_left, base_top, base_right, base_bottom], fill=CREAM)

# door cutout in accent color
door_w = 70
door_h = 100
door_left = cx - door_w//2
door_top = base_bottom - door_h
draw.rounded_rectangle([door_left, door_top, door_left+door_w, base_bottom], radius=8, fill=ACCENT_DARK)

img.save("/tmp/outputs/cozysmallspace-site/logo/pinterest-profile-logo.png", "PNG")
print("done")
