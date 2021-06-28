from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.urls import reverse
monthly_challenges = {
    "january": "eat no meat",
    "february": "walk for at least 20 minutes every day!",
    "march": "learn django for at least 20 minutes everyday",
    "april": "eat no meat",
    "may": "eat no meat",
    "june": "walk for at least 20 minutes every day!",
    "july": "learn django for at least 20 minutes everyday",
    "august": "eat no meat",
}

def index(request):
    list_items = ""
    months = list(monthly_challenges.keys())

    for month in months:
        capitalized_month = month.capitalize()
        month_path = reverse("month-challenge", args=[month])
        list_items += f"<li><a href=\"{month_path}\">{capitalized_month}</a></li>"
    response_data = f"<ul>{list_items}</ul>"
    return HttpResponse(response_data)
# Create your views here.
def january(request):
    return HttpResponse("Eat no meat for the entire month!")

def february(request):
    return HttpResponse("Walk for at least 20 minutes every day!")
def march(request):
    return HttpResponse("Learn Django")

def monthly_challenge(request, month):
    challenge_text = None
    # if month == 'january':
    #     challenge_text = "Eat no meat for entire month"
    # elif month == 'february':
    #     challenge_text = "Walk 20 minutes"
    try:
        response_data = f"<h1>{challenge_text}</h1>"
        challenge_text = monthly_challenges[month]
        return HttpResponse(response_data)
    except:
        return HttpResponseNotFound("<h1>This month is not supported!</h1>")
