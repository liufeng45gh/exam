
ps -ef|grep exam-1.0-SNAPSHOT.jar|awk '{print $2}'|xargs kill -9

mvn clean package

cp target/exam-1.0-SNAPSHOT.jar ./exam-1.0-SNAPSHOT.jar

nohup java -jar ./exam-1.0-SNAPSHOT.jar > ./nohup.out &


