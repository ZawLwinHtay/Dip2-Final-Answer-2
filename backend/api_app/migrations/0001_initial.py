# Generated by Django 4.2.7 on 2023-11-15 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=50)),
                ('content', models.CharField(max_length=255)),
                ('date', models.CharField(max_length=50)),
            ],
        ),
    ]