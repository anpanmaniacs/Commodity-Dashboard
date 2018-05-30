# Import Dependencies
import os
import pandas as pd
from bs4 import BeautifulSoup as bs
from splinter import Browser
import time
import csv

def init_browser():
    """ Connects path to chromedriver """
    
    executable_path = {'executable_path': '/Users/venessayeh/Downloads/chromedriver'}
    return Browser("chrome", **executable_path, headless=True)

def scrape(date):
    draft_list = []
    main_list = []
    
    google_news_url = "https://news.google.com/search?q=soybean+prices+"
    query_url = google_news_url + date
    
    browser = init_browser()
    browser.visit(query_url)

    news_html = browser.html
    news_soup = bs(news_html, "lxml")
    
    article_list = news_soup.find_all('div', class_='ZulkBc')
    
    for article in article_list:
        news_dict = {}

        title = article.find('a', class_='ipQwMb').text
        news_dict['title'] = title

        description = article.find('p', class_='HO8did').text
        news_dict['description'] = description

        find_url = article.find('a', class_='ipQwMb')['href']
        url = 'https://news.google.com' + find_url[1:]
        news_dict['url'] = url
        draft_list.append(news_dict)
        
    main_list.append(draft_list[0])
    main_list.append(draft_list[1])
    main_list.append(draft_list[2])
    
    return main_list

# Test scraper
scrape("7/5/2014")