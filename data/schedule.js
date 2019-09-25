export const Schedule = [
    {
    "ScheduleId":"1",
    "ScherduleDesc":"Trial A aspirin schedule",
    "DayFreq":"1", // every day
    "TimeFreq":"3", // every 6 hours
    "Breakfast":"5", // five minutes after breakfast
    "Lunch":"-5", // five minutes before lunch
    "Dinner":null,
    "WakeUp":"0",
    "Sleep":"-30",
    "Am":null,
    "Pm":null
    },
    {
        "ScheduleId":"2",
        "ScherduleDesc":"Trial A benzo schedule",
        "DayFreq":"1", // every day
        "TimeFreq":null, 
        "Breakfast":null, 
        "Lunch":null, 
        "Dinner":null,
        "WakeUp":null,
        "Sleep":null,
        "Am":"true",
        "Pm":"true"
    },
    {
        "ScheduleId":"3",
        "ScherduleDesc":"Trial A Ventolin schedule",
        "DayFreq":"1", 
        "TimeFrequencyId":"1", // every hour
        "Breakfast":null, 
        "Lunch":null, 
        "Dinner":null,
        "WakeUp":null,
        "Sleep":null,
        "Am":null,
        "Pm":null
    }
]