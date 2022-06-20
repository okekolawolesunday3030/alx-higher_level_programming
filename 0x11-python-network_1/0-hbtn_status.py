#!usr/bin/python3
"""
script that fetches https://intranet.hbtn.io/status

"""
if __name__ == "__ main__":
    import urlib.request as request
    with request.urlopen ('https://intranet.hbtn.io/status')
    html = ul.read()
    print  ('Body response:')
    print("\t-type: {}".format(type(html)))
    print("\t- content: {}".format(html))
     print("\t- utf8 content: {}".format(html.decode('utf-8')))


