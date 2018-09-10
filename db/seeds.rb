# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

b1 = Bench.create({description: "a very good bench", lat: 37.751914, lng: -122.465467})
b2 = Bench.create({description: "a very cozy bench", lat: 37.750523, lng: -122.468469})
b3 = Bench.create({description: "a very nice bench", lat: 37.753598, lng: -122.471115})
