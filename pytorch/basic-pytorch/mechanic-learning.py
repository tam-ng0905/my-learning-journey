import torch
import matplotlib.pyplot as plt


t_c = [0.5, 14.0, 15.0, 28.0, 11.0, -4.0, 13.0]
t_u = [35.7, 55.9, 58.2, 81.9, 56.3, 48.9, 33.9]
t_c = torch.tensor(t_c)
t_u = torch.tensor(t_u)

plt.plot(t_c)