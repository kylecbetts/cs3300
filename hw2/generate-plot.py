import math

data = [{"x":1.0 ,"y":9.0}, 
        {"x":1.5 ,"y":6.0}, 
        {"x":2.5 ,"y":4.0}, 
        {"x":4.0 ,"y":2.0}, 
        {"x":5.0 ,"y":1.6}, 
        {"x":6.0 ,"y":2.4}, 
        {"x":7.0 ,"y":3.0}, 
        {"x":8.0 ,"y":3.4}, 
        {"x":9.0 ,"y":3.6}]

def generate_plot(points):
    html = '<svg width=360 height=360>'

    x = []
    y = []
    for point in points:
        x.append(point["x"])
        y.append(point["y"])
    xmin = math.floor(min(x) / 5.0) * 5
    xmax = math.ceil(max(x) / 5) * 5
    ymin = math.floor(min(y) / 5) * 5
    ymax = math.ceil(max(x) / 5) * 5

    print('Xmin: {}'.format(xmin))
    print('Xmax: {}'.format(xmax))
    print('Ymin: {}'.format(ymin))
    print('Ymax: {}'.format(ymax))

if __name__ == '__main__':
    generate_plot(data)
