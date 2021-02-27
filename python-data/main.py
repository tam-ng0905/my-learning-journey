import numpy as np
import matplotlib.pyplot as plt
data = np.random.randn(2, 3, 2)

print(data)

print(data * 10)

arr1 = np.array([1, 2, 3], dtype=np.float64)

arr = np.arange(10)

arr

arr[5:8] = 12

print(arr)


arr = np.random.randn(7)
print("this is it")
print(np.where(arr > 0))

remainder, whole_part = np.modf(arr)
print(remainder, whole_part)


points = np.arange(-5, 5, 0.01)
xs, ys = np.meshgrid(points, points)

z = np.sqrt(xs ** 2 + ys ** 2)
print(z)

plt.imshow(z, cmap=plt.cm.gray); plt.colorbar()
plt.title("Image")


xarr = np.array([1.1, 1.2, 1.3])
yarr = np.array([2.1, 2.2, 2.3])

cond = np.array([True, False, True])
result = [(x if c else y)
          for x, y, c in zip(xarr, yarr, cond)]
print(result)

