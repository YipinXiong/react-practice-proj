import RootStore from '@root-store';
import {render, screen} from '@testing-library/react';
import Dashboard from '../Dashboard';
import React from 'React';

jest.mock('../../../apis/account-api-instance', () => {
  const MOCK_DATA_MTPLANSTATS = [
    {
      "plan": {
        "mtPlanID": "01f8cbd1-cdf4-4ac4-924c-dadfd5ad370d",
        "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
        "status": "Draft",
        "startDate": "2022-02-09",
        "startDateUTC": "2022-02-08T13:00:00Z",
        "title": "Copy of AK delete this sss",
        "description": "dsfsdfds edit"
      },
      "complianceRate": 100,
      "compliancePercent": "100",
      "achievementRate": 100,
      "achievementPercent": "100",
      "scheduleNum": 20,
      "activeEnrolledNum": 0,
      "enrolledNum": 0,
      "totalEnrolledNum": 0,
      "jobRoles": [
        {
          "jobRoleID": "0590cfb0-afcc-4faf-b0d9-e47ea05adf30",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Test new",
          "description": "To design human products ",
          "createDate": "2020-07-15T22:38:31Z",
          "updateDate": "2021-05-12T01:18:09Z"
        },
        {
          "jobRoleID": "13e10502-c05a-46e5-b3c1-5070b0eea09e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "7865q34",
          "description": "Test",
          "createDate": "2021-01-27T05:13:54Z",
          "updateDate": "2021-05-11T05:22:05Z"
        },
        {
          "jobRoleID": "1cadefb8-bbe0-4d40-b84e-d7529b3e28da",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "111",
          "createDate": "2021-01-27T05:06:05Z",
          "updateDate": "2021-11-04T06:18:20Z"
        },
        {
          "jobRoleID": "2163f0f9-ae09-46b0-a281-dd2745081ca5",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "AK Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor",
          "createDate": "2021-11-18T00:39:13Z",
          "updateDate": "2021-11-18T00:39:13Z"
        },
        {
          "jobRoleID": "3823700f-d8f3-4834-887a-cfbc668e4f9f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "AK Old LMS Job ed",
          "description": "This job is created in old LMS. new",
          "createDate": "2021-03-19T04:01:15Z",
          "updateDate": "2021-09-29T02:26:33Z"
        },
        {
          "jobRoleID": "3dc47539-f3e5-4367-b79c-cfc0bcff0a21",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "empty job role",
          "createDate": "2021-05-25T06:32:41Z",
          "updateDate": "2021-05-25T06:32:41Z"
        },
        {
          "jobRoleID": "42a8a8a7-f81d-42c4-b6ab-7aa9f30b160d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Kitchen",
          "createDate": "2021-06-25T00:51:30Z",
          "updateDate": "2021-06-25T00:51:30Z"
        },
        {
          "jobRoleID": "492ac398-ac4b-4b75-8748-6da0cda475ee",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "another",
          "createDate": "2021-01-27T05:10:55Z",
          "updateDate": "2021-01-27T05:10:55Z"
        },
        {
          "jobRoleID": "49efed3a-33cc-4ebc-95d5-004d393a7492",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Cleaners",
          "createDate": "2020-03-04T03:42:00Z",
          "updateDate": "2021-07-05T00:41:16Z"
        },
        {
          "jobRoleID": "4c009b3d-0b2a-489a-813c-dcce700c6c92",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Management",
          "createDate": "2020-03-04T03:41:35Z",
          "updateDate": "2020-03-04T03:41:35Z"
        },
        {
          "jobRoleID": "4e71f385-c336-4627-b148-cd9ba24ac605",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Frontend Designer",
          "description": "Developing and building frontend capabilities",
          "createDate": "2020-07-15T22:38:03Z",
          "updateDate": "2020-07-15T22:38:03Z"
        },
        {
          "jobRoleID": "4fc1ebb6-9b8d-44ba-aaee-dd97829e6005",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Jeremy's Job Role",
          "createDate": "2021-06-28T01:17:23Z",
          "updateDate": "2021-06-28T01:17:23Z"
        },
        {
          "jobRoleID": "5c53097a-873d-4961-bb04-487210d0fd0c",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Job Roles Testing Steven",
          "description": "Job Roles",
          "createDate": "2021-09-01T05:47:36Z",
          "updateDate": "2021-09-01T05:51:37Z"
        },
        {
          "jobRoleID": "6237e3cd-03ae-4bdb-89b3-612d417279d1",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "ktest3",
          "createDate": "2020-03-24T04:19:51Z",
          "updateDate": "2020-03-24T04:19:51Z"
        },
        {
          "jobRoleID": "63add3cf-341d-47a2-9693-225bc9c2196e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "ktest",
          "createDate": "2020-03-24T04:19:29Z",
          "updateDate": "2020-03-24T04:19:29Z"
        },
        {
          "jobRoleID": "73004c95-7219-486a-b465-c6ee592e181f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Hello",
          "description": "This is a job role\n",
          "createDate": "2021-03-26T11:49:13Z",
          "updateDate": "2021-03-26T11:49:13Z"
        },
        {
          "jobRoleID": "74486073-ae34-4fa7-b365-ab4cd7ce7ecd",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "job role 1",
          "createDate": "2020-09-11T05:55:24Z",
          "updateDate": "2020-09-11T05:55:24Z"
        },
        {
          "jobRoleID": "7864b0b0-5f60-4e27-8d35-a7e3867cd1c9",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "job role 2",
          "description": "new description for job role 2",
          "createDate": "2020-03-02T05:13:46Z",
          "updateDate": "2020-03-12T05:30:22Z"
        },
        {
          "jobRoleID": "84df2464-ea36-4f89-818a-cfebddc63345",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Another one",
          "createDate": "2021-01-27T04:32:30Z",
          "updateDate": "2021-06-09T06:05:12Z"
        },
        {
          "jobRoleID": "8614cf63-8a7f-45c7-8179-6a6125749002",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Nurse",
          "createDate": "2020-11-17T03:56:11Z",
          "updateDate": "2020-11-17T03:56:11Z"
        },
        {
          "jobRoleID": "95d9166c-6f02-4ca8-b7a2-cb60a09f5e16",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Murphy Test Job Role",
          "description": "Murphy Test Job Role",
          "createDate": "2021-02-17T02:36:53Z",
          "updateDate": "2021-03-09T23:22:10Z"
        },
        {
          "jobRoleID": "964d888a-62a7-474a-b8cb-a658d3bc3fe1",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "nlp",
          "createDate": "2021-09-08T05:34:57Z",
          "updateDate": "2021-09-08T05:34:57Z"
        },
        {
          "jobRoleID": "ae9892af-0b16-4e40-a0fd-e0c17f6f50fa",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Management Test",
          "createDate": "2021-06-21T04:19:47Z",
          "updateDate": "2021-06-21T04:19:47Z"
        },
        {
          "jobRoleID": "b0299121-8f98-43ad-9483-259199199cad",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "design team",
          "createDate": "2020-10-05T06:51:23Z",
          "updateDate": "2020-10-05T06:51:23Z"
        },
        {
          "jobRoleID": "b7d91d63-e85a-409e-a913-e0fa9006060f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "ktest2",
          "createDate": "2020-03-24T04:19:38Z",
          "updateDate": "2020-03-24T04:19:38Z"
        },
        {
          "jobRoleID": "b90c82e0-9293-40af-8af1-9f0b8ad24771",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Test",
          "createDate": "2021-02-16T05:12:12Z",
          "updateDate": "2021-02-16T05:12:12Z"
        },
        {
          "jobRoleID": "be3ded9d-7b3d-489b-a75e-aa82ce80a45d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Care Workers",
          "createDate": "2020-03-04T03:41:50Z",
          "updateDate": "2020-03-04T03:41:50Z"
        },
        {
          "jobRoleID": "c12a4f6b-d28c-4f7c-9eec-baa41b9a5239",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "ak icon job",
          "createDate": "2021-10-22T05:29:54Z",
          "updateDate": "2021-10-22T05:29:54Z"
        },
        {
          "jobRoleID": "c4a672e9-51d3-462e-b301-d829bfbe398d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Cleaner",
          "description": "Wipes surfaces. Has toilet paper.",
          "createDate": "2020-03-18T23:32:05Z",
          "updateDate": "2020-03-18T23:32:05Z"
        },
        {
          "jobRoleID": "c4a8eeb9-bf3b-43c3-bb05-f4b1b5420327",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "new role",
          "createDate": "2021-01-27T23:14:58Z",
          "updateDate": "2021-01-27T23:14:58Z"
        },
        {
          "jobRoleID": "d3b1116d-4cab-47a4-90dd-50b26629d558",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "sola job role",
          "description": "test",
          "createDate": "2020-07-08T01:25:42Z",
          "updateDate": "2020-07-08T01:25:42Z"
        },
        {
          "jobRoleID": "efdd1874-3fd3-4796-8f11-58d0af0f56d0",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "job role 3",
          "description": "description test 3",
          "createDate": "2020-03-03T04:01:25Z",
          "updateDate": "2020-03-03T04:01:25Z"
        },
        {
          "jobRoleID": "fb2d92aa-55bd-48c7-b8b4-e5906db037e8",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Job Role Test",
          "createDate": "2021-01-27T04:25:26Z",
          "updateDate": "2021-01-27T04:25:26Z"
        },
        {
          "jobRoleID": "fb85a992-616e-405c-a5a2-d3feeda9a391",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "sola job role 2",
          "createDate": "2020-07-08T01:25:44Z",
          "updateDate": "2020-07-08T01:25:44Z"
        }
      ],
      "teamStat": {
        "complianceRate": 100,
        "compliancePercent": "100",
        "achievementRate": 100,
        "achievementPercent": "100",
        "activeEnrolledNum": 0,
        "enrolledNum": 0,
        "totalEnrolledNum": 0,
        "unfinishedScheduleNum": 0
      },
      "unfinishedScheduleNum": 0
    },
    {
      "plan": {
        "mtPlanID": "05048687-6c2a-470e-85e6-f8dc25a8eb51",
        "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
        "status": "Archived",
        "startDate": "2021-10-11",
        "endDate": "2022-01-07",
        "startDateUTC": "2021-10-10T13:00:00Z",
        "endDateUTC": "2022-01-07T12:59:59Z",
        "title": "ak once draft",
        "description": "ewfwe",
        "planType": "Once"
      },
      "complianceRate": 100,
      "compliancePercent": "100.00",
      "achievementRate": 100,
      "achievementPercent": "100",
      "scheduleNum": 4,
      "activeEnrolledNum": 9,
      "enrolledNum": 14,
      "totalEnrolledNum": 15,
      "jobRoles": [
        {
          "jobRoleID": "1cadefb8-bbe0-4d40-b84e-d7529b3e28da",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "111",
          "createDate": "2021-01-27T05:06:05Z",
          "updateDate": "2021-11-04T06:18:20Z"
        },
        {
          "jobRoleID": "3823700f-d8f3-4834-887a-cfbc668e4f9f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "AK Old LMS Job ed",
          "description": "This job is created in old LMS. new",
          "createDate": "2021-03-19T04:01:15Z",
          "updateDate": "2021-09-29T02:26:33Z"
        },
        {
          "jobRoleID": "be3ded9d-7b3d-489b-a75e-aa82ce80a45d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Care Workers",
          "createDate": "2020-03-04T03:41:50Z",
          "updateDate": "2020-03-04T03:41:50Z"
        },
        {
          "jobRoleID": "c12a4f6b-d28c-4f7c-9eec-baa41b9a5239",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "ak icon job",
          "createDate": "2021-10-22T05:29:54Z",
          "updateDate": "2021-10-22T05:29:54Z"
        }
      ],
      "relatedJobRoles": [
        {
          "jobRoleID": "3823700f-d8f3-4834-887a-cfbc668e4f9f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "AK Old LMS Job ed",
          "description": "This job is created in old LMS. new",
          "createDate": "2021-03-19T04:01:15Z",
          "updateDate": "2021-09-29T02:26:33Z"
        },
        {
          "jobRoleID": "be3ded9d-7b3d-489b-a75e-aa82ce80a45d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Care Workers",
          "createDate": "2020-03-04T03:41:50Z",
          "updateDate": "2020-03-04T03:41:50Z"
        }
      ],
      "teamStat": {
        "complianceRate": 100,
        "compliancePercent": "100.00",
        "achievementRate": 100,
        "achievementPercent": "100",
        "activeEnrolledNum": 4,
        "enrolledNum": 5,
        "totalEnrolledNum": 5,
        "relatedJobRoles": [
          {
            "jobRoleID": "be3ded9d-7b3d-489b-a75e-aa82ce80a45d",
            "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
            "isActive": true,
            "title": "Care Workers",
            "createDate": "2020-03-04T03:41:50Z",
            "updateDate": "2020-03-04T03:41:50Z"
          }
        ],
        "unfinishedScheduleNum": 0
      },
      "unfinishedScheduleNum": 0
    },
    {
      "plan": {
        "mtPlanID": "05e6f0da-b7ef-4233-83c7-c2c5decbd295",
        "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
        "status": "Active",
        "startDate": "2021-10-26",
        "startDateUTC": "2021-10-25T13:00:00Z",
        "title": "111Yipin-Testing",
        "description": "sdf"
      },
      "complianceRate": 0,
      "compliancePercent": "0.00",
      "achievementRate": 50,
      "achievementPercent": "50.00",
      "scheduleNum": 9,
      "activeEnrolledNum": 1,
      "enrolledNum": 3,
      "totalEnrolledNum": 3,
      "jobRoles": [
        {
          "jobRoleID": "13e10502-c05a-46e5-b3c1-5070b0eea09e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "7865q34",
          "description": "Test",
          "createDate": "2021-01-27T05:13:54Z",
          "updateDate": "2021-05-11T05:22:05Z"
        },
        {
          "jobRoleID": "1cadefb8-bbe0-4d40-b84e-d7529b3e28da",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "111",
          "createDate": "2021-01-27T05:06:05Z",
          "updateDate": "2021-11-04T06:18:20Z"
        },
        {
          "jobRoleID": "73004c95-7219-486a-b465-c6ee592e181f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Hello",
          "description": "This is a job role\n",
          "createDate": "2021-03-26T11:49:13Z",
          "updateDate": "2021-03-26T11:49:13Z"
        },
        {
          "jobRoleID": "84df2464-ea36-4f89-818a-cfebddc63345",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Another one",
          "createDate": "2021-01-27T04:32:30Z",
          "updateDate": "2021-06-09T06:05:12Z"
        },
        {
          "jobRoleID": "be3ded9d-7b3d-489b-a75e-aa82ce80a45d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Care Workers",
          "createDate": "2020-03-04T03:41:50Z",
          "updateDate": "2020-03-04T03:41:50Z"
        },
        {
          "jobRoleID": "c12a4f6b-d28c-4f7c-9eec-baa41b9a5239",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "ak icon job",
          "createDate": "2021-10-22T05:29:54Z",
          "updateDate": "2021-10-22T05:29:54Z"
        },
        {
          "jobRoleID": "c4a672e9-51d3-462e-b301-d829bfbe398d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Cleaner",
          "description": "Wipes surfaces. Has toilet paper.",
          "createDate": "2020-03-18T23:32:05Z",
          "updateDate": "2020-03-18T23:32:05Z"
        }
      ],
      "relatedJobRoles": [
        {
          "jobRoleID": "13e10502-c05a-46e5-b3c1-5070b0eea09e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "7865q34",
          "description": "Test",
          "createDate": "2021-01-27T05:13:54Z",
          "updateDate": "2021-05-11T05:22:05Z"
        },
        {
          "jobRoleID": "73004c95-7219-486a-b465-c6ee592e181f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Hello",
          "description": "This is a job role\n",
          "createDate": "2021-03-26T11:49:13Z",
          "updateDate": "2021-03-26T11:49:13Z"
        }
      ],
      "teamStat": {
        "complianceRate": 100,
        "compliancePercent": "100",
        "achievementRate": 100,
        "achievementPercent": "100",
        "activeEnrolledNum": 0,
        "enrolledNum": 0,
        "totalEnrolledNum": 0,
        "unfinishedScheduleNum": 0
      },
      "unfinishedScheduleNum": 0
    },
    {
      "plan": {
        "mtPlanID": "063181aa-a6f4-49df-87b5-e9b8ee7a1dfa",
        "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
        "status": "Draft",
        "startDate": "2022-03-04",
        "startDateUTC": "2022-03-03T13:00:00Z",
        "title": "Copy of Copy of Evan Test Unenroll 22",
        "description": ""
      },
      "complianceRate": 100,
      "compliancePercent": "100",
      "achievementRate": 100,
      "achievementPercent": "100",
      "scheduleNum": 3,
      "activeEnrolledNum": 0,
      "enrolledNum": 0,
      "totalEnrolledNum": 0,
      "jobRoles": [
        {
          "jobRoleID": "13e10502-c05a-46e5-b3c1-5070b0eea09e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "7865q34",
          "description": "Test",
          "createDate": "2021-01-27T05:13:54Z",
          "updateDate": "2021-05-11T05:22:05Z"
        },
        {
          "jobRoleID": "1cadefb8-bbe0-4d40-b84e-d7529b3e28da",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "111",
          "createDate": "2021-01-27T05:06:05Z",
          "updateDate": "2021-11-04T06:18:20Z"
        }
      ],
      "teamStat": {
        "complianceRate": 100,
        "compliancePercent": "100",
        "achievementRate": 100,
        "achievementPercent": "100",
        "activeEnrolledNum": 0,
        "enrolledNum": 0,
        "totalEnrolledNum": 0,
        "unfinishedScheduleNum": 0
      },
      "unfinishedScheduleNum": 0
    },
    {
      "plan": {
        "mtPlanID": "07f52a01-91be-45bc-a5a7-d6d78213f2f2",
        "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
        "status": "Archived",
        "startDate": "2021-11-05",
        "endDate": "2021-11-05",
        "startDateUTC": "2021-11-04T13:00:00Z",
        "endDateUTC": "2021-11-05T12:59:59Z",
        "title": "Copy of ak recurring plan",
        "description": "",
        "planType": "Recurring"
      },
      "complianceRate": 100,
      "compliancePercent": "100.00",
      "achievementRate": 100,
      "achievementPercent": "100",
      "scheduleNum": 1,
      "activeEnrolledNum": 309,
      "enrolledNum": 555,
      "totalEnrolledNum": 636,
      "jobRoles": [
        {
          "jobRoleID": "1cadefb8-bbe0-4d40-b84e-d7529b3e28da",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "111",
          "createDate": "2021-01-27T05:06:05Z",
          "updateDate": "2021-11-04T06:18:20Z"
        },
        {
          "jobRoleID": "3823700f-d8f3-4834-887a-cfbc668e4f9f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "AK Old LMS Job ed",
          "description": "This job is created in old LMS. new",
          "createDate": "2021-03-19T04:01:15Z",
          "updateDate": "2021-09-29T02:26:33Z"
        }
      ],
      "relatedJobRoles": [
        {
          "jobRoleID": "1cadefb8-bbe0-4d40-b84e-d7529b3e28da",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "111",
          "createDate": "2021-01-27T05:06:05Z",
          "updateDate": "2021-11-04T06:18:20Z"
        },
        {
          "jobRoleID": "3823700f-d8f3-4834-887a-cfbc668e4f9f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "AK Old LMS Job ed",
          "description": "This job is created in old LMS. new",
          "createDate": "2021-03-19T04:01:15Z",
          "updateDate": "2021-09-29T02:26:33Z"
        }
      ],
      "teamStat": {
        "complianceRate": 100,
        "compliancePercent": "100.00",
        "achievementRate": 100,
        "achievementPercent": "100",
        "activeEnrolledNum": 5,
        "enrolledNum": 7,
        "totalEnrolledNum": 7,
        "relatedJobRoles": [
          {
            "jobRoleID": "3823700f-d8f3-4834-887a-cfbc668e4f9f",
            "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
            "isActive": true,
            "title": "AK Old LMS Job ed",
            "description": "This job is created in old LMS. new",
            "createDate": "2021-03-19T04:01:15Z",
            "updateDate": "2021-09-29T02:26:33Z"
          }
        ],
        "unfinishedScheduleNum": 0
      },
      "unfinishedScheduleNum": 0
    },
    {
      "plan": {
        "mtPlanID": "096e3745-977f-4c13-9c7d-4930cd3aceb2",
        "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
        "status": "Archived",
        "startDate": "2021-11-04",
        "endDate": "2022-01-13",
        "startDateUTC": "2021-11-03T13:00:00Z",
        "endDateUTC": "2022-01-13T12:59:59Z",
        "title": "Grace Test",
        "description": "",
        "planType": "Once"
      },
      "complianceRate": 100,
      "compliancePercent": "100.00",
      "achievementRate": 100,
      "achievementPercent": "100",
      "scheduleNum": 1,
      "activeEnrolledNum": 2,
      "enrolledNum": 2,
      "totalEnrolledNum": 2,
      "jobRoles": [
        {
          "jobRoleID": "13e10502-c05a-46e5-b3c1-5070b0eea09e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "7865q34",
          "description": "Test",
          "createDate": "2021-01-27T05:13:54Z",
          "updateDate": "2021-05-11T05:22:05Z"
        }
      ],
      "relatedJobRoles": [
        {
          "jobRoleID": "13e10502-c05a-46e5-b3c1-5070b0eea09e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "7865q34",
          "description": "Test",
          "createDate": "2021-01-27T05:13:54Z",
          "updateDate": "2021-05-11T05:22:05Z"
        }
      ],
      "teamStat": {
        "complianceRate": 100,
        "compliancePercent": "100",
        "achievementRate": 100,
        "achievementPercent": "100",
        "activeEnrolledNum": 0,
        "enrolledNum": 0,
        "totalEnrolledNum": 0,
        "unfinishedScheduleNum": 0
      },
      "unfinishedScheduleNum": 0
    },
    {
      "plan": {
        "mtPlanID": "096f1d9d-de51-41d3-9758-1f4f293b4e32",
        "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
        "status": "Active",
        "startDate": "2021-11-01",
        "endDate": "2021-07-07",
        "startDateUTC": "2021-10-31T13:00:00Z",
        "endDateUTC": "2021-07-07T13:59:59Z",
        "title": "Copy of Sola test expiry plan",
        "description": ""
      },
      "complianceRate": 100,
      "compliancePercent": "100",
      "achievementRate": 100,
      "achievementPercent": "100",
      "scheduleNum": 4,
      "activeEnrolledNum": 0,
      "enrolledNum": 0,
      "totalEnrolledNum": 0,
      "jobRoles": [
        {
          "jobRoleID": "13e10502-c05a-46e5-b3c1-5070b0eea09e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "7865q34",
          "description": "Test",
          "createDate": "2021-01-27T05:13:54Z",
          "updateDate": "2021-05-11T05:22:05Z"
        },
        {
          "jobRoleID": "1cadefb8-bbe0-4d40-b84e-d7529b3e28da",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "111",
          "createDate": "2021-01-27T05:06:05Z",
          "updateDate": "2021-11-04T06:18:20Z"
        },
        {
          "jobRoleID": "84df2464-ea36-4f89-818a-cfebddc63345",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Another one",
          "createDate": "2021-01-27T04:32:30Z",
          "updateDate": "2021-06-09T06:05:12Z"
        }
      ],
      "teamStat": {
        "complianceRate": 100,
        "compliancePercent": "100",
        "achievementRate": 100,
        "achievementPercent": "100",
        "activeEnrolledNum": 0,
        "enrolledNum": 0,
        "totalEnrolledNum": 0,
        "unfinishedScheduleNum": 2
      },
      "unfinishedScheduleNum": 2
    },
    {
      "plan": {
        "mtPlanID": "0bb8bc37-c42a-448c-af46-a4dccafc5631",
        "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
        "status": "Draft",
        "startDate": "2022-03-02",
        "startDateUTC": "2022-03-01T13:00:00Z",
        "title": "Copy of Copy of Sola test expiry plan 5",
        "description": ""
      },
      "complianceRate": 100,
      "compliancePercent": "100",
      "achievementRate": 100,
      "achievementPercent": "100",
      "scheduleNum": 4,
      "activeEnrolledNum": 0,
      "enrolledNum": 0,
      "totalEnrolledNum": 0,
      "jobRoles": [
        {
          "jobRoleID": "13e10502-c05a-46e5-b3c1-5070b0eea09e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "7865q34",
          "description": "Test",
          "createDate": "2021-01-27T05:13:54Z",
          "updateDate": "2021-05-11T05:22:05Z"
        },
        {
          "jobRoleID": "1cadefb8-bbe0-4d40-b84e-d7529b3e28da",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "111",
          "createDate": "2021-01-27T05:06:05Z",
          "updateDate": "2021-11-04T06:18:20Z"
        },
        {
          "jobRoleID": "84df2464-ea36-4f89-818a-cfebddc63345",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Another one",
          "createDate": "2021-01-27T04:32:30Z",
          "updateDate": "2021-06-09T06:05:12Z"
        }
      ],
      "teamStat": {
        "complianceRate": 100,
        "compliancePercent": "100",
        "achievementRate": 100,
        "achievementPercent": "100",
        "activeEnrolledNum": 0,
        "enrolledNum": 0,
        "totalEnrolledNum": 0,
        "unfinishedScheduleNum": 2
      },
      "unfinishedScheduleNum": 2
    },
    {
      "plan": {
        "mtPlanID": "0d3a2a0d-f2e7-4776-b106-fb518c3ae7a1",
        "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
        "status": "Active",
        "startDate": "2022-01-04",
        "endDate": "2021-08-20",
        "startDateUTC": "2022-01-03T13:00:00Z",
        "endDateUTC": "2021-08-20T13:59:59Z",
        "title": "Copy of type test",
        "description": "copy inactive",
        "planType": "Once"
      },
      "complianceRate": 100,
      "compliancePercent": "100",
      "achievementRate": 100,
      "achievementPercent": "100",
      "scheduleNum": 3,
      "activeEnrolledNum": 0,
      "enrolledNum": 0,
      "totalEnrolledNum": 0,
      "jobRoles": [
        {
          "jobRoleID": "2163f0f9-ae09-46b0-a281-dd2745081ca5",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "AK Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor",
          "createDate": "2021-11-18T00:39:13Z",
          "updateDate": "2021-11-18T00:39:13Z"
        }
      ],
      "teamStat": {
        "complianceRate": 100,
        "compliancePercent": "100",
        "achievementRate": 100,
        "achievementPercent": "100",
        "activeEnrolledNum": 0,
        "enrolledNum": 0,
        "totalEnrolledNum": 0,
        "unfinishedScheduleNum": 2
      },
      "unfinishedScheduleNum": 2
    },
    {
      "plan": {
        "mtPlanID": "0e979ce8-abc1-4c4e-a70f-88039c57f25d",
        "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
        "status": "Active",
        "startDate": "2021-02-06",
        "startDateUTC": "2021-02-05T13:00:00Z",
        "title": "Bowen test plan 2",
        "description": "This is the description of the plan"
      },
      "complianceRate": 50,
      "compliancePercent": "50.00",
      "achievementRate": 16,
      "achievementPercent": "16.76",
      "scheduleNum": 36,
      "activeEnrolledNum": 16,
      "enrolledNum": 27,
      "totalEnrolledNum": 39,
      "jobRoles": [
        {
          "jobRoleID": "0590cfb0-afcc-4faf-b0d9-e47ea05adf30",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Test new",
          "description": "To design human products ",
          "createDate": "2020-07-15T22:38:31Z",
          "updateDate": "2021-05-12T01:18:09Z"
        },
        {
          "jobRoleID": "13e10502-c05a-46e5-b3c1-5070b0eea09e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "7865q34",
          "description": "Test",
          "createDate": "2021-01-27T05:13:54Z",
          "updateDate": "2021-05-11T05:22:05Z"
        },
        {
          "jobRoleID": "1cadefb8-bbe0-4d40-b84e-d7529b3e28da",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "111",
          "createDate": "2021-01-27T05:06:05Z",
          "updateDate": "2021-11-04T06:18:20Z"
        },
        {
          "jobRoleID": "2163f0f9-ae09-46b0-a281-dd2745081ca5",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "AK Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor",
          "createDate": "2021-11-18T00:39:13Z",
          "updateDate": "2021-11-18T00:39:13Z"
        },
        {
          "jobRoleID": "3823700f-d8f3-4834-887a-cfbc668e4f9f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "AK Old LMS Job ed",
          "description": "This job is created in old LMS. new",
          "createDate": "2021-03-19T04:01:15Z",
          "updateDate": "2021-09-29T02:26:33Z"
        },
        {
          "jobRoleID": "3dc47539-f3e5-4367-b79c-cfc0bcff0a21",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "empty job role",
          "createDate": "2021-05-25T06:32:41Z",
          "updateDate": "2021-05-25T06:32:41Z"
        },
        {
          "jobRoleID": "42a8a8a7-f81d-42c4-b6ab-7aa9f30b160d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Kitchen",
          "createDate": "2021-06-25T00:51:30Z",
          "updateDate": "2021-06-25T00:51:30Z"
        },
        {
          "jobRoleID": "492ac398-ac4b-4b75-8748-6da0cda475ee",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "another",
          "createDate": "2021-01-27T05:10:55Z",
          "updateDate": "2021-01-27T05:10:55Z"
        },
        {
          "jobRoleID": "49efed3a-33cc-4ebc-95d5-004d393a7492",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Cleaners",
          "createDate": "2020-03-04T03:42:00Z",
          "updateDate": "2021-07-05T00:41:16Z"
        },
        {
          "jobRoleID": "4c009b3d-0b2a-489a-813c-dcce700c6c92",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Management",
          "createDate": "2020-03-04T03:41:35Z",
          "updateDate": "2020-03-04T03:41:35Z"
        },
        {
          "jobRoleID": "4e71f385-c336-4627-b148-cd9ba24ac605",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Frontend Designer",
          "description": "Developing and building frontend capabilities",
          "createDate": "2020-07-15T22:38:03Z",
          "updateDate": "2020-07-15T22:38:03Z"
        },
        {
          "jobRoleID": "4fc1ebb6-9b8d-44ba-aaee-dd97829e6005",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Jeremy's Job Role",
          "createDate": "2021-06-28T01:17:23Z",
          "updateDate": "2021-06-28T01:17:23Z"
        },
        {
          "jobRoleID": "6237e3cd-03ae-4bdb-89b3-612d417279d1",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "ktest3",
          "createDate": "2020-03-24T04:19:51Z",
          "updateDate": "2020-03-24T04:19:51Z"
        },
        {
          "jobRoleID": "63add3cf-341d-47a2-9693-225bc9c2196e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "ktest",
          "createDate": "2020-03-24T04:19:29Z",
          "updateDate": "2020-03-24T04:19:29Z"
        },
        {
          "jobRoleID": "73004c95-7219-486a-b465-c6ee592e181f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Hello",
          "description": "This is a job role\n",
          "createDate": "2021-03-26T11:49:13Z",
          "updateDate": "2021-03-26T11:49:13Z"
        },
        {
          "jobRoleID": "74486073-ae34-4fa7-b365-ab4cd7ce7ecd",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "job role 1",
          "createDate": "2020-09-11T05:55:24Z",
          "updateDate": "2020-09-11T05:55:24Z"
        },
        {
          "jobRoleID": "7864b0b0-5f60-4e27-8d35-a7e3867cd1c9",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "job role 2",
          "description": "new description for job role 2",
          "createDate": "2020-03-02T05:13:46Z",
          "updateDate": "2020-03-12T05:30:22Z"
        },
        {
          "jobRoleID": "84df2464-ea36-4f89-818a-cfebddc63345",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Another one",
          "createDate": "2021-01-27T04:32:30Z",
          "updateDate": "2021-06-09T06:05:12Z"
        },
        {
          "jobRoleID": "8614cf63-8a7f-45c7-8179-6a6125749002",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Nurse",
          "createDate": "2020-11-17T03:56:11Z",
          "updateDate": "2020-11-17T03:56:11Z"
        },
        {
          "jobRoleID": "95d9166c-6f02-4ca8-b7a2-cb60a09f5e16",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Murphy Test Job Role",
          "description": "Murphy Test Job Role",
          "createDate": "2021-02-17T02:36:53Z",
          "updateDate": "2021-03-09T23:22:10Z"
        },
        {
          "jobRoleID": "ae9892af-0b16-4e40-a0fd-e0c17f6f50fa",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Management Test",
          "createDate": "2021-06-21T04:19:47Z",
          "updateDate": "2021-06-21T04:19:47Z"
        },
        {
          "jobRoleID": "b0299121-8f98-43ad-9483-259199199cad",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "design team",
          "createDate": "2020-10-05T06:51:23Z",
          "updateDate": "2020-10-05T06:51:23Z"
        },
        {
          "jobRoleID": "b7d91d63-e85a-409e-a913-e0fa9006060f",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "ktest2",
          "createDate": "2020-03-24T04:19:38Z",
          "updateDate": "2020-03-24T04:19:38Z"
        },
        {
          "jobRoleID": "b90c82e0-9293-40af-8af1-9f0b8ad24771",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Test",
          "createDate": "2021-02-16T05:12:12Z",
          "updateDate": "2021-02-16T05:12:12Z"
        },
        {
          "jobRoleID": "be3ded9d-7b3d-489b-a75e-aa82ce80a45d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Care Workers",
          "createDate": "2020-03-04T03:41:50Z",
          "updateDate": "2020-03-04T03:41:50Z"
        },
        {
          "jobRoleID": "c12a4f6b-d28c-4f7c-9eec-baa41b9a5239",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "ak icon job",
          "createDate": "2021-10-22T05:29:54Z",
          "updateDate": "2021-10-22T05:29:54Z"
        },
        {
          "jobRoleID": "c4a672e9-51d3-462e-b301-d829bfbe398d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Cleaner",
          "description": "Wipes surfaces. Has toilet paper.",
          "createDate": "2020-03-18T23:32:05Z",
          "updateDate": "2020-03-18T23:32:05Z"
        },
        {
          "jobRoleID": "c4a8eeb9-bf3b-43c3-bb05-f4b1b5420327",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "new role",
          "createDate": "2021-01-27T23:14:58Z",
          "updateDate": "2021-01-27T23:14:58Z"
        },
        {
          "jobRoleID": "d3b1116d-4cab-47a4-90dd-50b26629d558",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "sola job role",
          "description": "test",
          "createDate": "2020-07-08T01:25:42Z",
          "updateDate": "2020-07-08T01:25:42Z"
        },
        {
          "jobRoleID": "efdd1874-3fd3-4796-8f11-58d0af0f56d0",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "job role 3",
          "description": "description test 3",
          "createDate": "2020-03-03T04:01:25Z",
          "updateDate": "2020-03-03T04:01:25Z"
        },
        {
          "jobRoleID": "fb2d92aa-55bd-48c7-b8b4-e5906db037e8",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Job Role Test",
          "createDate": "2021-01-27T04:25:26Z",
          "updateDate": "2021-01-27T04:25:26Z"
        },
        {
          "jobRoleID": "fb85a992-616e-405c-a5a2-d3feeda9a391",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "sola job role 2",
          "createDate": "2020-07-08T01:25:44Z",
          "updateDate": "2020-07-08T01:25:44Z"
        }
      ],
      "relatedJobRoles": [
        {
          "jobRoleID": "0590cfb0-afcc-4faf-b0d9-e47ea05adf30",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Test new",
          "description": "To design human products ",
          "createDate": "2020-07-15T22:38:31Z",
          "updateDate": "2021-05-12T01:18:09Z"
        },
        {
          "jobRoleID": "13e10502-c05a-46e5-b3c1-5070b0eea09e",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "7865q34",
          "description": "Test",
          "createDate": "2021-01-27T05:13:54Z",
          "updateDate": "2021-05-11T05:22:05Z"
        },
        {
          "jobRoleID": "492ac398-ac4b-4b75-8748-6da0cda475ee",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "another",
          "createDate": "2021-01-27T05:10:55Z",
          "updateDate": "2021-01-27T05:10:55Z"
        },
        {
          "jobRoleID": "49efed3a-33cc-4ebc-95d5-004d393a7492",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Cleaners",
          "createDate": "2020-03-04T03:42:00Z",
          "updateDate": "2021-07-05T00:41:16Z"
        },
        {
          "jobRoleID": "4c009b3d-0b2a-489a-813c-dcce700c6c92",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Management",
          "createDate": "2020-03-04T03:41:35Z",
          "updateDate": "2020-03-04T03:41:35Z"
        },
        {
          "jobRoleID": "74486073-ae34-4fa7-b365-ab4cd7ce7ecd",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "job role 1",
          "createDate": "2020-09-11T05:55:24Z",
          "updateDate": "2020-09-11T05:55:24Z"
        },
        {
          "jobRoleID": "7864b0b0-5f60-4e27-8d35-a7e3867cd1c9",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "job role 2",
          "description": "new description for job role 2",
          "createDate": "2020-03-02T05:13:46Z",
          "updateDate": "2020-03-12T05:30:22Z"
        },
        {
          "jobRoleID": "84df2464-ea36-4f89-818a-cfebddc63345",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Another one",
          "createDate": "2021-01-27T04:32:30Z",
          "updateDate": "2021-06-09T06:05:12Z"
        },
        {
          "jobRoleID": "8614cf63-8a7f-45c7-8179-6a6125749002",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Nurse",
          "createDate": "2020-11-17T03:56:11Z",
          "updateDate": "2020-11-17T03:56:11Z"
        },
        {
          "jobRoleID": "95d9166c-6f02-4ca8-b7a2-cb60a09f5e16",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Murphy Test Job Role",
          "description": "Murphy Test Job Role",
          "createDate": "2021-02-17T02:36:53Z",
          "updateDate": "2021-03-09T23:22:10Z"
        },
        {
          "jobRoleID": "be3ded9d-7b3d-489b-a75e-aa82ce80a45d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Care Workers",
          "createDate": "2020-03-04T03:41:50Z",
          "updateDate": "2020-03-04T03:41:50Z"
        },
        {
          "jobRoleID": "c4a672e9-51d3-462e-b301-d829bfbe398d",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Cleaner",
          "description": "Wipes surfaces. Has toilet paper.",
          "createDate": "2020-03-18T23:32:05Z",
          "updateDate": "2020-03-18T23:32:05Z"
        },
        {
          "jobRoleID": "c4a8eeb9-bf3b-43c3-bb05-f4b1b5420327",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "new role",
          "createDate": "2021-01-27T23:14:58Z",
          "updateDate": "2021-01-27T23:14:58Z"
        },
        {
          "jobRoleID": "d3b1116d-4cab-47a4-90dd-50b26629d558",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "sola job role",
          "description": "test",
          "createDate": "2020-07-08T01:25:42Z",
          "updateDate": "2020-07-08T01:25:42Z"
        },
        {
          "jobRoleID": "fb2d92aa-55bd-48c7-b8b4-e5906db037e8",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "Job Role Test",
          "createDate": "2021-01-27T04:25:26Z",
          "updateDate": "2021-01-27T04:25:26Z"
        },
        {
          "jobRoleID": "fb85a992-616e-405c-a5a2-d3feeda9a391",
          "orgID": "e76170da-5562-4cf7-9065-6afbfce77f9a",
          "isActive": true,
          "title": "sola job role 2",
          "createDate": "2020-07-08T01:25:44Z",
          "updateDate": "2020-07-08T01:25:44Z"
        }
      ],
      "teamStat": {
        "complianceRate": 100,
        "compliancePercent": "100.00",
        "achievementRate": 100,
        "achievementPercent": "100",
        "activeEnrolledNum": 1,
        "enrolledNum": 1,
        "totalEnrolledNum": 1,
        "unfinishedScheduleNum": 0
      },
      "unfinishedScheduleNum": 0
    }
  ];

  return {
    get: () => Promise.resolve({data: MOCK_DATA_MTPLANSTATS}),
  }
})

describe('render dashboard with mock axios instance', () => {
  it('render dashboard and display heading', async () => {
    const mockRootStore = {jobRolesStore: {isLoading: false}} as unknown as RootStore;
    render(<Dashboard rootStore={mockRootStore}/>);
    const titleElement = screen.getByRole("heading");
    expect(titleElement).toHaveTextContent('here is dashboard');
    const btnWrapper = await screen.findByTestId('btn-wrapper');
    expect(btnWrapper).toBeVisible();
    const mtPlanBtns = await screen.findAllByRole('button');
    expect(mtPlanBtns.length).toBe(10);
  });
});
