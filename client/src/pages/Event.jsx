function Event() {
  return (
    <>
      {/* top box  */}
      <div className="m-10 flex flex-wrap justify-between bg-[#ffffff]  p-6 border-2 border-[#e1e0dc] rounded-xl">
        <h1 className="text-3xl">Events</h1>
        <h4 className=" border-2 border-blue-600 rounded-full text-blue-600 p-2 w-[150px] text-center cursor-pointer">
          Create An Event
        </h4>
      </div>
      {/* 2nd box  */}
      <div className="m-10 bg-[#ffffff]  p-6 border-2 border-[#e1e0dc] rounded-xl">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-xl">Your events</h1>
          <h4 className=" text-blue-600 p-2 cursor-pointer">Show all</h4>
        </div>
        <div className="flex flex-wrap justify-between mt-4">
          <div className="flex flex-wrap gap-5">
            <div>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA4QEBAQEBEQDhAPDw4QDhAOEBAQDg4OFxMYGBcTFxcaICwjGhwoIBcXJDUkKC0vMjIyGSI4PTgwPCwxPy8BCwsLDw4PHBERGTEgICAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAcGBQj/xABAEAACAgECAgcFBAkDAwUAAAABAgADEQQhBRIGEzFBUWFxByJTgZEyQpOhIyRSYnKSorHRFBUzQ7LxFmOCweH/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAMxEAAgECAwQHBwUBAAAAAAAAAAECAxEEEiEFMUGhEzJRgZHR4RQiYXGxwfAVQlJT8WP/2gAMAwEAAhEDEQA/ADASQEQEmonmmz0IgJNRHAkgsByIJRCKIlWEVYDZYlWTVY6rCqsDMUMqwirHVYVVg5iiKpJqkmqwirBzFNgwsIEk1SECyrgtgwkcJChZIJJcHMCCShxbi+k0ah9RalQPYDu7bE7KNz2GN0p4ouh0V+oOOZExSD965tkHnuc+gM+fuJcQu1Vz33Nz2OcscAAeAAHYBN+DwTr3k3aKM9bEZNFqzdNF0s4ZdyCvU1Zc4VWPI/N4FWwf/qe/yT5gxNg9l/SezUK2ju996k5qrSRkp+yR5eP+YzF7P6KOeDulvuDSxLk7NanfckYrLBSRKTmGnMVysiUlkrIlZLlplUpIFZZKyDLJcO5VZYNllplgmWXcsrMsgyyyywTLLuEVmWRIh2WDYQkyACJAiGYSDCGmEBIjGEIkSIaZAJkcQhEbEO5BwsIFjASaiKciCVYRViUSaiBcglWFURKsKqwLgiVYRViVYZVgtlDKsKqxKsKqwbgsiqwqrJKsmqyXAbGVZMLJKsKqSIW5AwkmEhVSEVIaQtzMv9smsZNLp6Au1t3OW93GK1Pu47RuynPlMdBmte27Rt+o6gL7mL6WbuDnldQfUB/oZks9Js+KVBW43+tvsY6rvIWZ1vsxqd+LabkzgC1rCO5FrJ38s8o+c5Kdx7JKHfi1ZUsBXTqHs5SQGTk5cN4jmZPmBHYl2oz+T+gMOsjcykiUlkpIlJ5WxszFYpIFJZKSLJBsGpFUrIMssssGyyhqkVWSDZZaZYNhKuGmVGWQZZZZYJll3DKrLIMssssEywswRWYSDLLDLBssLMWAKwZWHZZEiHmLK5WNywpEjiEpEHAhFESiTURLkQdRJqsSrCqsFyKYlWFVYyrCqsDMUOqwqLGRYVFg5gWOqwqrEqwgWS4tsSrCqsSrCqsJCpSGVYVUjqsMiRsI3ESkRVIUJJqkIFmyFFsQ5njdI+DJr9HfpXIHWoQjEc3JYN1bHkwBny/rNM9NttL456bLKnwcjnRipx8xPrXUW11I9ljLXXWjPY7HCoijJYnuAAnylx/VpfrNXfWCK79VqLqwdjyPYzDPyM62BhKF09359hcnc8+b57JujTaPSf6m0DrtatbjbdNPjKLnzzzH1HhMCxPqzovq6dRoNJbSQa209IGPulVCsh8wQQfSFjlKUFFbnvLi7F4pIlJZKSBScaVFoNSKxWQZZZZYNliJRGqRVZZBllllg2WJaGxkVWWDZZZZYJli7jYyKzLBMstMsEyyrjUyqywbLLTLAssmYYVmWQZZYZYJlhZiyuwkGWWGWDZYSkEAKyGIZhIlYSkQdRCKIyiEUTO5ljqIRVjKIVRBzgsdVhVWMiwyiDmBHVYVVkVWFUS8wuTHVYZFjKsKiw0xMpDqsKqxlWFVY6KESkOiywiyCLLKrOlhaOZmecjyOPcf0XD6uu1doqU5CKAWttb9lEG5P5DvxM/u9tWlGeTQ3N4c9taZHngHE4D2mcYbWcV1J5i1dFh01I+6qVnlbHq/OfnORM7cKMUtRZ2nTH2ha7iY6ofqmlIXm09b83WsO+x8AsP3dhsNiRmcZGijrJaIpDzr+hPTrVcJbqwBdpHsD3UH7QJ2Zq2+62AO3Y4+c4+KSyejIz6C0/tf4K/2xqqT/wC5Srf9jGdhwfjGk11Qu0tqXVnYlThkb9llO6nyInyaJ0/QDjlmg4jprFYrXbbXTqVzhGpdgpJ/hzzDzWInQi0WfTLLBMsskSDLOXWoWCjIqssGyyyywTLObONh0ZFVhBsJZZYFlmaQ+LKzCDYSyywLLFtjosrsINhLDCCZYOYamV2WDYSw6wLLKzjADCDYSwywbCXnCK7CRxDMIPELOWSUQiiMqwiiZnIhJRCKIyrCqIOYFklEIokVEKgkUgJE0EIokVEMgjYsRJk1EIgkUEMgjoCJMkohVEiohVE2U43EyZNFhicAkbkAkDxMgohMgDJ2A7c9gE72DhZGeTPj66xnZnY5Z2ZmJ7SxOSfrBGWdcU663q96+ts6s+Kc55fyxKxnQRJCjRR4QAooo0hBxJgkbjYjcEdoMHLGjq6yyusnAexEJ8AzAZ/OUw4n1voLC9FLnteqpz6lQTDMI9aBVVRsFAUDwAGBHYRFWF0CgLCCcSwRBMJxsRTtuGRZXYQTCWGEEwnLmjRFlZhBOJYYQTCZpD4srsIJhDsINhESY6LAMIJhDMINhF5xyAMINhDsINhCUgwDCQxDMJDEJSLJqIRREok1EW2QdRCKIyiEURbYDY6iFWQUQqiDmFSZNRDKINIVRHwkIkFQQqiQUQqzbTESYRBCgSCiEWdPDxM8mTWcx7S+LNo+E6qxDiyxV09ZzghrDykjzClj8p1CzHPbfx+qzqOH1urtVYb9SFbPVuFKohx97DOSO73fGdygrAb2ZBie5qOBleE0cQwR1mvv0xOdmQVIybfxLbPGVfn6dpm3dIOi4o6JpRaOW3SJXq2z2rezlnX5C11msqRhcUciNLKFFFFIUISY+k63oxwYX8K43qOVWs09ejNZxllUW89pHh7qTk8SmGj6r6H8TOs4do9Sxy9tCdae42r7j/1K09kzPvYtr1t4SKvvaW+6th38rt1gPp75HyM0IwZbgQbCDYQrSDTm4iISAuIFhDsIFpw6ysx0WBcQLCHaBcTBNmiIFhAtDtAsJjqSHxBMINhCsINhAuOiCYQbCGYSBEJDEAYSOIZhIYjEwiSiEAiUSYEBsFsdRJqIyiEURbYuTEohFEZRJqIDYtsmghkEGglXi1usrp5tHVVqLAwLVXWmrnrwchGAI5s4AzgbmaKCzSstBE3Yr9LeNNw/RvqK6hdbz11U1kkc9ljco7Bk+OB24xtG6G9J6eJ0cwAq1FR5dTp8+/S42yAd+U9x9R2icJ016ZUanS6cKr0arScQ092q0OpDJdhA2ytjDDJHZvg5wJyvTXi1P+626rhtr1h1rZraGavmvKguVI332z4nmnpMLgJThllHK9Xm+VtH8He6a+aMspa6H0YoiuurqRrLHWutFLO7sFRVHaSTsBMJ4b7WuI06fq3rq1VoJ6u+4tkL4Oq45yPHInMdIelnEOJH9auLIDlaaxyUKf4R2nzOTOjQwM4v3hR3XTz2oPdz6XhjNXVuturGVssHeK+9F/e7T3Y78rJJJJ3JOSTuSfGdDwjoPxjWEdVo7lQkfpLx1CAeOXxkegM1Don7I9PQVu4g66u0YIoTI0qn94nd/wAh5GdKMUlZEukcl7IejDarWrq7qmOm0oLo7L+js1IOEUE/a5d227Cq+M2jpVphdw/XVHA59JqACewN1bYPyODPTpqRFVEUIqgBVQBVVR2AAdgnB+1vpOmi0L6ZG/Wdcj1KN816c7WOfDb3R5tnuMNAt3Z87mNETFIS40cRsxZllXNv9h2lqu4fxGuwBxdcKrkP3qWqxg+vM8yjpFws6LWanS83N/p7nRWPayDdWPmQROy9iXGTTxFtKT+j1tTADBP6asF1Pl7vWD6TUelfs/4dxMtY6tRqWA/WKdnYgYHOp2fYAb74HaJRE7GC9Fuk+s4Xd1umcAPyi6pt6r1GcBh4jJwRuMnxM3/of020PFUHVsKtSBmzSuw6wY7Sh++vmPmBMW6T+znimgJYVnWUDcXaZWbA/fT7SfmPOchTc9bq9btW6EMjoxV1YdhBG4MoLRn1+ZAzEujHte1FIFXEazqqwMC6nlXUAfvKcK/r7p9Z3F/tP4KtDXJc1rDAGnWt1vZj3YYAY884mOtTk9yIjrr7FRWd2CIiszsxwqqBksT3ACeJwLpJoeI9cdJYbRSyrYTW6DLc3KRzAZB5TMq4n041fG9RRw9CvD9LqbqqXAYva4ZgMO+BnyUAAk4JInQdA9Tw/Q6zjaixNNpKbdJTW2otC8zVC5HwWPvEkE7eInOxGFUacnLrb7fC6QxaGktAuJ5fBulGi19j16ZrbQqs3Wmi5aGwQCA7AAncbT1mE8/iISg7SVmPiyu8Ewh3EEwnNlI0RAsINhDMJEiCmNTAESDCGYSDCMTGJgCJHEMRIYhpjEyYkxICTEFgsmsIINYQRbFMksIsGsIsBi5BBFqOt6t+pKC3kbqjaGNQsxsWCnJGfCJZNTDpVHBipGb9MeivFtYrWXng+Kl521SpqqdRXWoJbmPvZQDOxz5DM5bo97Pr9ZqgnNYNEqhn1hotpD7fYqW0AsckbkYxk+R3hTDKZ6PCbSqwhkju+n5+IyzR8wdKNNoqdXbRojY9NBNRtuYO1tqnDuMAALnYemc77UuGcS1GlsFunsemwbB6zg48Ja6S8Is0Osv0rhv0djdWzDeykn3H88jHzzPJnq4WcVrfTf2irGl8E9r/ABGjC6pKtcg7W/4L8fxKOU/y/OdnoPbFwqwhbqtVps9rFEsrH8jc39MwLMWYRTR9UaDphwjU8oq12mZm+yjWrXYT4BXwc/KYz7btSLOLKqurdVo6UIU55GLO+D4HDA+hEzwmMZYJGNFFLIKPGikIez0V4oNFr9JqmBKUXI9gX7Rr7Hx4nlJ2n0IPaPwEoH/1qYP3TXdz/NOXP5T5jk1aURI+i9X7WeB1glLL9Qf2adO6n62co/Ocdx72lcF1Qbn4ONU5Gz6jqa3z/GoZh8jMnzGMgWUucS1NNthajTppExtXXZbaB5lrGJMpZiilEOn4P0M4lrNMNXpFrvUOylK7VW+t1PYVbGDjB2PYROz6L+ycWV1X6+yxOdVc6WtDXYmfu2M24PZkADv3lr2F03CrX2E/oGtpRBn/AKyqxcgd3uun5eE1ZjOPjcZUpycIu3x4/IJHm8M4bTo6U09AZKqs8is72FQSSRliTjJMO0I5gXM8niKl22zTBAzBmEMGZzr6j4kDINJyDQ0MQNpBpNpBoxDUQMhJtIQ0MQAa+j41X4iyY19HxqvxFmKdYR3xCxu4H856D9DX9nL1A6SBtq8Q0/xqvxFkxxHT/Gq/EWYkLG8T6QiXE+J+kF7CX9j8PUv3H2m2LxLTfGq/EWSHEtP8ar8RZia2t3gya3NkDByYD2Ev7OXqV0dN9ptw4jp/jU/iLJDiWn+NT/OsxNbn7gT4wgvYeP1zAewf+nL1L6Cm+LNuTiWn+NT+IsKvFNN8ar8RZiiWtjbP1hUsthR2ZOHVny9Sng6T4s0/pHwzhHEq+TUtSWAIquR0XUUn91vDyOQfCYX0s6OPw64J1iailxmm9Oxh3qy5PKw8Pn6dQl1nZjeLUJ1yGq1Q6t2qdt+4g9xnSwlSvh3aUk49n31bFT2dBr3Zamb5j5ntcR6O3VZaoG2sb4/6ijzHf6ieGQQcHYjYg9oM7sKkaivF3OVVhOk8s1YUaPGhgIcyMlGxLBGij4jyEGjxo8oIfMWZHMNp6HtblrRrG8FBJ9T4SbtWWnd2QMmdX0S6ItrXV9Q/+k0uzGxiBZaPCsHx/aO3rCcH6MqpV9UQSMHqRuB/Ge/0G3rOla49+cdg5cdnpOXisc+pQevbb6dp0sPs9yV6unw49/kaPwe/hehor02ndUqrBxk5JYnJLHvYnvll+P6P4yzKWvbuDkeYHZ9ZBrtxufQjecaeHq1NZS5Gr2CiuL/O41J+kGi+MPpAt0h0Xxh9DMwaw+B9IB7j4GJeyFPfJ8g1haS4s1Jukeh+MPof8QTdJND8Ufyn/Ey57MnbI27D3wbPg75hLYlP+T5F9DTXaaiekuh+L/Sf8SDdJtB8X+hv8TLzYN9pAv5E+Q7YyOxKXa+XkTo6a/005uk+g+If5D/iQbpRoPiH+QzMS/l9YM2eUNbFpdsuXkV7iNOPSnQftt/IZD/1ToPiN/IZmRsPhI9Y3h/eH+jUf5PxXkTPDsHUjPdt4YiRxk7Z8DzAY+UEiPzYCZA/eAhuQgZ5d+/3lwR4TsuwhN77Egrd5BHdjB/OEVFYksO4Y274JDb9kBgO3GVP1ju1nevfvnC7QWGmuwkxTu7Acf8AiENmDjHaAc7SquDkbjHeXx/aR5Ap97lceAteSyJmZ6Ac/teZwBgiOlqE45wM9xUjf5ytVaM7K4B7AXLD6yzzLjOwYY7yQfLeLa+A1O+4MvLuBYP4BzZkqW3xzuO3cZxmVq8bs3WZbs5SNvpFqOLaaoEMzE9nIGDMR54H94Di3ok34BOSirydl8T061s5hjdcZJwSR+UMM4+xnvPPlfn5ThtVx+9mPVYpXOV5QOcDzM867VW2Emyx35jk8zMcw1gJy3tLu9fuZJ7Rprqpvl+eB2er43RVzgkMezkqsYnPr2TytZ0lrcEf6Wu0dzaj3iPkP8zmYppjgqS36978zHUx9WWisl4/UsarUdYc8ldflUvIsrxR5rSUVZGNtt3YopGKWUPHjRSibxoo5jSyg1VrIcjH/wAlVv7gz3ND0ovqXl6upwPAGvb0Xac7Hi6lGnUVpxuOp1qlPqSsdWel4Of1UDPcLdv+2EHSbTco9y9T3jCMvpnI/tOQjxHsVHgrd7+9x6x9dcb9y+1jsF45pyrfpMY7NnDkeAlrS66q7/hxZgbhm5WHng7zhcxEyPCQ4MZHaM+KR31ljEYC9ud1bGT6wRWwjPIceAbs9cTjdPqrav8Ajdkz2hTsfUdkv1cf1K96vnY8y4z/AC4gPCyXVtzHRx8H1k1z/PA6Flc/dxjtwcnHqYEBu0oxByASVAx5TzB0kf71SYIAIVrBnz3J3hqukVIwDRuPvc7MfXtgdFUX7ea8xntVF/u5ehbHN8I4J7eYZzJ4tHbU3qSucSNXGNM37A272sXf0I3hBqqmyVK4Ow99tvPwgvMt8fH/AEYpRl1ZX8PIA/WdhQYPmDHbm71x57Yis5CftE48CuMSDlw2xtwdxhhjHhLWpTHWweA+RkksGOz+oSA8hZnzIaMFt8G+i/5hMrUkV067hzv4Ds8omKnlCkZ8OYbxRQrcbgRld2sFrWonBPKB275GfnGeuk5wObHf1Zb/APcRRQLa7w07rcRdqFxzmqv1Zlb6Ygf9x0IGG5mP7g5vzIjxR1Oipb2zLiMTKm9EinbxbTj7FOcbZYDB8+2V7uKqWylFSjGCCGbJ8e0YjxR3QwXDmzK8VVfG3cjz7NS7ZyxGc7L7q48MCBiijLWM7be8UaKKWQUUUUhBRoopCCiiikIKOIopCh4xiilFjRRRSyh4oopCxRRRSEFFFFIQUUUUhBRRRSECJa6/ZYj0O0vabjOoqGFKn+Jc/KPFBlCL3q4cKk49VtFlePuc89YbON1d1x6CG/3mo7nmHkVZj9eePFF9BB8LDva6q0vc/9k="
                className="w-[100px]"
              />
            </div>
            <div className="w-[300px]">
              <p>Sat, Apr 20, 2024, 1:00 PM</p>
              <p className="text-lg">
                Conditioning Your Mindset for Promotions and Appraisals
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            <div>
              <img
                src="https://image.myupchar.com/5247/original/yoga-in-hindi.png"
                className="w-[100px]"
              />
            </div>
            <div className="w-[300px]">
              <p>Sat, Apr 20, 2024, 1:00 PM</p>
              <p className="text-lg">
                Conditioning Your Mindset for Promotions and Appraisals
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            <div>
              <img
                src="https://vectorified.com/images/convert-image-to-icon-online-7.png"
                className="w-[100px]"
              />
            </div>
            <div className="w-[300px]">
              <p>Sat, Apr 20, 2024, 1:00 PM</p>
              <p className="text-lg">
                Conditioning Your Mindset for Promotions and Appraisals
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd box  */}
      {/* <div className="m-10 bg-[#ffffff]  p-6 border-2 border-[#e1e0dc] rounded-xl">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-xl">Top Audio Events</h1>
          <h4 className=" text-blue-600 p-2 cursor-pointer">Show all</h4>
        </div>
        <div className="flex flex-wrap justify-between mt-4 gap-5">
          <div className="border-2 rounded-lg ">
            <div className="flex justify-center items-center">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20231017114110/WEB-DESIGN-copy.webp"
                className="w-[400px] h-[200px] p-2"
              />
            </div>
            <div className="p-5 w-[400px]">
              <p>Sat, Apr 20, 2024, 1:00 PM</p>
              <p className="text-lg hover:text-blue-500 hover:cursor-pointer">
                Web designing
              </p>
            </div>
            <div className="flex justify-center items-center m-3">
              <button className="border-2 border-blue-600 rounded-2xl w-[300px] p-1 text-blue-600 hover:bg-blue-600 hover:text-white">
                View
              </button>
            </div>
          </div>
          <div className="border-2 rounded-lg ">
            <div className="flex justify-center items-center">
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg"
                className="w-[400px] h-[200px] p-2"
              />
            </div>
            <div className="p-5 w-[400px]">
              <p>Sat, Apr 20, 2024, 1:00 PM</p>
              <p className="text-lg hover:text-blue-500 hover:cursor-pointer">
                Web Development with MEAN/MERN stack
              </p>
            </div>
            <div className="flex justify-center items-center m-3">
              <button className="border-2 border-blue-600 rounded-2xl w-[300px] p-1 text-blue-600 hover:bg-blue-600 hover:text-white">
                View
              </button>
            </div>
          </div>
          <div className="border-2 rounded-lg ">
            <div className="flex justify-center items-center">
              <img
                src="https://i.ytimg.com/vi/o-k7h2G3Gco/maxresdefault.jpg"
                className="w-[400px] h-[200px] p-2"
              />
            </div>
            <div className="p-5 w-[400px]">
              <p>Sat, Apr 20, 2024, 1:00 PM</p>
              <p className="text-lg hover:text-blue-500 hover:cursor-pointer">
                System designing
              </p>
            </div>
            <div className="flex justify-center items-center m-3">
              <button className="border-2 border-blue-600 rounded-2xl w-[300px] p-1 text-blue-600 hover:bg-blue-600 hover:text-white">
                View
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* 4th box  */}
      <div></div>
    </>
  );
}

export default Event;
