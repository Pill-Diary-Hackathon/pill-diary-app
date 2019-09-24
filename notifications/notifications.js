import { Notifications } from 'expo';

const takeMedsActions = [
  {
    actionId: 'took',
    buttonTitle: 'Took It!',
    isDestructive: false,
    isAuthenticationRequired: false,
    screen: 'Links',
  },
  {
    actionId: 'snooze',
    buttonTitle: 'Snooze',
    isDestructive: false,
    isAuthenticationRequired: false,
    screen: 'Links',
  },
  {
    actionId: 'view',
    buttonTitle: 'View in App',
    isDestructive: false,
    isAuthenticationRequired: false,
    screen: 'Links',
  },
];

export const setupNotificationResponses = async navigate => {
  Notifications.addListener(notification => {
    const action = takeMedsActions.find(
      el => el.actionId === notification.actionId
    );
    if (action) {
      navigate(action.screen);
    }
  });

  await Notifications.createCategoryAsync('ps1', takeMedsActions);
};

export const notificationTest = async () => {
  const localNotification = {
    title: "It's time to take your medication :)",
    body: 'Drug 1\nDrug2',
    categoryId: 'ps1',
    android: { sticky: false },
    data: {},
  };

  const schedulingOptions = { time: new Date().getTime() + 2000 };
  const notification = await Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions
  );
};
