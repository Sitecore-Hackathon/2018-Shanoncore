create table HeatmapDatapoint
(
	Id int Identity(1,1) primary key not null,
    DateTime DateTime not null,
	RelativeUrl nvarchar(1000),
	X int not null,
    Y int not null,
    Width int not null,
)