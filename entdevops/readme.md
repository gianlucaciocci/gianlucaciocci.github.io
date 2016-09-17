# Slack API config for auto-enrollment app
https://api.slack.com

Client ID: 80008415314.80715428388  
Client Secret: 30ecdb62d4757f11e92e959ad7b65fc2

curl -X POST 'https://enterprise-devops.slack.com/api/users.admin.invite' \
--data 'email=gianluca.ciocci@hpe.com&token=30ecdb62d4757f11e92e959ad7b65fc2&set_active=true' \
--compressed