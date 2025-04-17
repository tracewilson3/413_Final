using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Final.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<FinalDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("FinalConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
    "https://brave-sky-05b62981e.6.azurestaticapps.net",
    "http://localhost:3000"
)
.AllowAnyHeader()
.AllowAnyMethod()
.AllowCredentials();

    });
});

    
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


// pages to change

// backend
// // new models
// // new dbcontext
// // new connection string in appsettings.json
// // connection string on program.cs
// // everything on the controller. Remember category filter
// // 

// frontend
// // app.tsx
// // types - based off models - ask Chat
// // api - just change names 
// // keep pagination
// // modify welcomeband, 

// DO THIS
// **** *** ** sqlite database > properties > copy to output directory > copy if newer