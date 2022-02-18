User.destroy_all
Application.destroy_all


puts "Seeding starting!"

puts "Creating Users"
User.create!(id:1, name: "John Doe", email: "foo@bar.com")

puts "Creating Jobs"
Application.create!(company:"Apple", position: "Software Engineer", contact: "Carol", deadline: "03/15/2022", offer: true, accepted: false, notes: "Need to negotiate salary", user_id: 1)
Application.create!(company:"Netflix", position: "Software Engineer", contact: "Mr. Sabertooth", deadline: "03/19/2022", offer: true, accepted: false, notes: "Need to review PTO policy", user_id: 1)
Application.create!(company:"Spotify", position: "Software Engineer", contact: "Mick Jagger", deadline: "03/25/2021", offer: false, accepted: false, notes: "Need to negotiate salary", user_id: 1)

puts "Seeding finished!"

